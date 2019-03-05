import * as fb from "firebase";

class Task {
  constructor(
    authorID,
    authorName,
    authorLink,
    projectLink = "teslink",
    project = "test",
    publicationDate,
    tagsList,
    taskDesc,
    taskLink,
    taskTitle,
    projectLogo = "",
    active = false,
    completed = false
  ) {
    this.author = authorID;
    this.authorName = authorName;
    this.authorLink = authorLink;
    this.projectLink = projectLink;
    this.project = project;
    this.publicationDate = publicationDate;
    this.tags = tagsList;
    this.description = taskDesc;
    this.link = taskLink;
    this.title = taskTitle;
    this.projectLogo = projectLogo;
    this.active = active;
    this.completed = completed;
  }
}

export default {
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(task => task.id !== payload);
    },
    loadTask(state, payload) {
      state.tasks = payload;
    }
  },
  actions: {
    async fetchTasks({ commit }, payload) {
      commit("clearMessage");

      try {
        const fbValue = await fb
          .database()
          .ref("task")
          .once("value");
        const tasks = fbValue.val();
        let result = [];
        Object.keys(tasks).forEach(key => {
          const task = tasks[key];
          const {
            author,
            authorName,
            authorLink,
            projectLink,
            project,
            publicationDate,
            tags,
            description,
            link,
            title,
            projectLogo,
            active
          } = task;
          result.push({
            id: key,
            author,
            authorName,
            authorLink,
            projectLink,
            project,
            publicationDate,
            tags,
            description,
            link,
            title,
            projectLogo,
            active
          });
        });
        commit("loadTask", result);
      } catch (error) {
        throw error;
      }
    },
    async addTask({ commit, getters }, payload) {
      commit("setBtnLoadingStatus", "Please wait");
      commit("clearMessage");
      commit("setLoading", true);
      try {
        const {
          authorLink,
          projectLink,
          projectTitle,
          tagsList,
          taskDesc,
          taskLink,
          taskTitle
        } = payload;
        const authorID = getters.userID;
        const authorName = getters.userName;
        const publicationDate = Date.now();
        const newTask = new Task(
          authorID,
          authorName,
          authorLink,
          projectLink,
          projectTitle,
          publicationDate,
          tagsList,
          taskDesc,
          taskLink,
          taskTitle
        );
        await fb
          .database()
          .ref("task")
          .push(newTask)
          .then(result => {
            commit("setMessage", {
              title: "🙌 Success",
              status: "successful",
              message:
                "Thank You! Your task is saved and very soon it will appear on the list."
            });
            commit("setLoading", false);
          });
      } catch (error) {
        commit("setMessage", {
          status: "error",
          message: error.message
        });
        commit("setLoading", false);
      }
    },
    async deleteTask({ commit }, payload) {
      try {
        const { key } = payload;
        await fb
          .database()
          .ref("task")
          .child(key)
          .remove()
          .then(result => commit("deleteTask", key));
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    completeTasks(state, getters) {
      return getters.tasks.filter(task => task.completed && task.active);
    },
    completeTasksLength(state, getters) {
      return getters.completeTasks.length;
    },
    openTasks(state, getters) {
      return getters.tasks.filter(task => !task.completed && task.active);
    },
    openTasksLength(state, getters) {
      return getters.openTasks.length;
    },
    userTask(state, getters) {
      return getters.tasks.filter(task => task.author === getters.userID);
    },
    taskById(state, getters) {
      return id => {
        return getters.tasks.find(task => task.id === id);
      };
    }
  }
};

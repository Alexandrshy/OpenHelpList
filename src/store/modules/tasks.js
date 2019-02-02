export default {
  state: {
    tasks: [
      {
        id: 1,
        author: "Alex Shu",
        authorLink: "https://github.com/Alexandrshy",
        project: "OpenHelpList",
        projectLink: "https://github.com/Alexandrshy/OpenHelpList",
        projectLogo:
          "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
        projectissue: "https://github.com/GoogleChrome/puppeteer/issues/3761",
        title: "Modify README.md",
        description:
          "<p>Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md </p>",
        language: "JavaScript",
        level: "junior",
        completed: false,
        tag: ["JavaScript", "React", "Redux", "Jest"]
      },
      {
        id: 2,
        author: "Alex Shu",
        authorLink: "https://github.com/Alexandrshy",
        project: "OpenHelpList",
        projectLink: "https://github.com/Alexandrshy/OpenHelpList",
        projectLogo:
          "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
        title: "Make the first commit",
        description:
          "<p>Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit</p> <p>Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit Make the <a href='#'>first</a> commit Make the first commit Make the first commit Make the first commit Make the first commit Make the first commit</p>",
        language: "JavaScript",
        level: "junior",
        completed: true
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    tasks(state) {
      return state.tasks;
    },
    completeTasks(state, getters) {
      return getters.tasks.filter(task => task.completed);
    },
    completeTasksLength(state, getters) {
      return getters.completeTasks.length;
    },
    openTasks(state, getters) {
      return getters.tasks.filter(task => !task.completed);
    },
    openTasksLength(state, getters) {
      return getters.openTasks.length;
    },
    taskById(state, getters) {
      return id => getters.tasks.find(task => task.id === id);
    }
  }
};

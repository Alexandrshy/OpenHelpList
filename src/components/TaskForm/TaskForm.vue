<template>
  <div class="task-form">
    <div class="task-form__wrapper">
      <div class="task-form__box">
        <div class="task-form__title">
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</h3>
        </div>
        <div class="task-form__tab task-form__tab--preview" v-if="preview">
          <task-item :key="task.id" :task="task" :preview="true" class="task__item--embed"></task-item>
        </div>
        <form class="task-form__elem" @submit.prevent="submitForm" @change="changeForm">
          <div class="task-form__editor" v-if="!preview">
            <div class="task-form__item">
              <label for="taskTitle" class="required">Task title</label>
              <input
                id="taskTitle"
                type="text"
                placeholder="Example: Write a unit test for a form component"
                @blur="$v.taskTitle.$touch()"
                v-model="taskTitle"
                :class="{'is-invalid': $v.taskTitle.$error}"
              >
              <div class="task-form__message-wrapper">
                <p
                  class="task-form__message"
                  :class="{'is-invalid': $v.taskTitle.$error}"
                  v-if="$v.taskTitle.$error && !$v.taskTitle.required"
                >This field cannot be empty.</p>
              </div>
            </div>
            <div class="task-form__item">
              <label for="taskLink" class="required">Link to task</label>
              <input
                id="taskLink"
                type="text"
                placeholder="Example: https://github.com/Author/Project/issues/1"
                @blur="$v.taskLink.$touch()"
                v-model="taskLink"
                :class="{'is-invalid': $v.taskLink.$error}"
              >
              <div class="task-form__message-wrapper">
                <p
                  class="task-form__message"
                  :class="{'is-invalid': $v.taskLink.$error}"
                  v-if="$v.taskLink.$error && !$v.taskLink.required"
                >This field cannot be empty.</p>
              </div>
            </div>
            <div class="task-form__item">
              <label for="taskDesc" class="required">Task description</label>
              <textarea
                id="taskDesc"
                rows="16"
                class="form-control"
                @blur="$v.taskDesc.$touch()"
                v-model="taskDesc"
                :class="{'is-invalid': $v.taskDesc.$error}"
                placeholder="Example: My app written on React is not fully covered by tests, you need to write tests for the form component"
              ></textarea>
              <div class="task-form__message-wrapper">
                <p
                  class="task-form__message"
                  :class="{'is-hidden': $v.taskDesc.$error}"
                >Describe in as much detail as possible what you need to do to solve the task. In this field you can use the markdowns for the description or you can provide it to me</p>
                <p
                  class="task-form__message"
                  :class="{'is-invalid': $v.taskDesc.$error}"
                  v-if="$v.taskDesc.$error && !$v.taskDesc.required"
                >This field cannot be empty.</p>
              </div>
            </div>
            <div class="task-form__item">
              <span class="tag-label">Add new tag</span>
              <vue-tags-input
                v-model="tag"
                :tags="tags"
                :max-tags="5"
                :maxlength="25"
                :delete-on-backspace="false"
                placeholder="Example: Frontend, React, Jest, etc."
                @tags-changed="newTags => tags = newTags"
              />
              <p class="task-form__message">You can add a few tags to help with your task.</p>
            </div>
            <div class="task-form__item">
              <label for="authorLink">Link to author</label>
              <input
                id="authorLink"
                type="text"
                placeholder="Example: https://twitter.com/userName"
                v-model="authorLink"
              >
              <div class="task-form__message-wrapper">
                <p
                  class="task-form__message"
                >Also you can write your email or link to social networks if you want to discuss the details with the developer.</p>
              </div>
            </div>
            <div class="task-form__item">
              <label for="projectTitle">Project title</label>
              <input
                id="projectTitle"
                type="text"
                placeholder="Example: Puppeteer"
                v-model="projectTitle"
              >
            </div>
            <div class="task-form__item">
              <label for="projectLink">Link to project</label>
              <input
                id="projectLink"
                type="text"
                placeholder="Example: https://github.com/GoogleChrome/puppeteer"
                v-model="projectLink"
              >
            </div>
          </div>
          <div class="task-form__item task-form__item--button">
            <button class="button task-form__button" type="submit" :disabled="loading">{{button}}</button>
            <button
              class="button task-form__button"
              type="button"
              :disabled="this.$v.$invalid"
              @click="switchScreen"
            >{{preview ? 'Edit' : 'Preview'}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import { required } from "vuelidate/lib/validators";
import TaskItem from "@/components/Task/TaskItem.vue";
export default {
  name: "TaskForm",
  components: {
    VueTagsInput,
    taskItem: TaskItem
  },
  beforeCreate() {
    this.$store.dispatch("setBtnLoadingStatus", "Post a task");
  },
  data() {
    return {
      tag: "",
      tags: [],
      taskDesc: "",
      taskTitle: "",
      taskLink: "",
      authorLink: "",
      projectTitle: "",
      projectLink: "",
      preview: false
    };
  },
  validations: {
    taskTitle: {
      required
    },
    taskLink: {
      required
    },
    taskDesc: {
      required
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$store.dispatch("setMessage", {
          title: "❗ Oh, something went wrong",
          status: "error",
          message:
            "Not all required fields have been filled in. Fix it and try again."
        });
        return false;
      }
      const task = this.getTask();
      this.$store.dispatch("addTask", task).then(() => {
        this.cleanForm();
        this.preview = false;
        setTimeout(() => {
          this.$store.dispatch("clearMessage");
        }, 10000);
      });
    },
    switchScreen() {
      this.$v.$touch();
      this.preview = !this.preview;
      this.$store.dispatch("clearMessage");
    },
    getTask() {
      const {
        authorLink,
        projectLink,
        projectTitle,
        tags,
        taskDesc,
        taskLink,
        taskTitle
      } = this;
      const tagsList = tags.map(tag => tag.text);
      return {
        authorLink,
        projectLink,
        projectTitle,
        tagsList,
        taskDesc,
        taskLink,
        taskTitle
      };
    },
    changeForm() {
      if (this.message && !this.$v.$invalid) {
        this.$store.dispatch("clearMessage");
      }
    },
    cleanForm() {
      this.taskDesc = "";
      this.taskTitle = "";
      this.taskLink = "";
      this.tag = "";
      this.tags = [];
      this.authorLink = "";
      this.projectTitle = "";
      this.projectLink = "";
      this.$v.$reset();
    }
  },
  computed: {
    loading() {
      return this.$store.loading;
    },
    message() {
      return this.$store.getters.message;
    },
    status() {
      return this.$store.getters.status;
    },
    button() {
      return this.$store.getters.btnLoadingStatus;
    },
    user() {
      return this.$store.getters.user.name;
    },
    task() {
      const {
        authorLink,
        projectTitle,
        projectLink,
        taskLink,
        taskTitle,
        taskDesc,
        tagsList
      } = this.getTask();
      return {
        id: 1000,
        author: this.user,
        projectLogo: "",
        completed: false,
        authorLink,
        project: projectTitle,
        projectLink,
        projectissue: taskLink,
        title: taskTitle,
        description: taskDesc,
        tag: tagsList
      };
    }
  }
};
</script>

<style>
@import "./style/taskForm.css";
@import "./style/tags.css";
</style>

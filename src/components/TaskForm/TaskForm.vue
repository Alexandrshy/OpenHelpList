<template>
  <div class="task-form">
    <div class="task-form__wrapper">
      <form class="task-form__elem" @submit.prevent="submitForm">
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
            >This field cannot be empty</p>
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
            >This field cannot be empty</p>
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
            >This field cannot be empty</p>
          </div>
        </div>
        <div class="task-form__item">
          <span class="tag-label">Add new tag</span>
          <vue-tags-input
            v-model="tag"
            :tags="tags"
            :max-tags="5"
            :maxlength="20"
            :delete-on-backspace="false"
            placeholder="Example: Frontend, React, Jest, etc."
            @tags-changed="newTags => tags = newTags"
          />
          <p class="task-form__message">You can add a few tags to help with your task</p>
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
            >Also you can write your email or link to social networks if you want to discuss the details with the developer</p>
          </div>
        </div>
        <div class="task-form__item task-form__item--button">
          <button class="button" type="submit">Post a task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import VueTagsInput from "@johmun/vue-tags-input";
import { required } from "vuelidate/lib/validators";
export default {
  name: "TaskForm",
  components: {
    VueTagsInput
  },
  data() {
    return {
      tag: "",
      tags: [],
      taskDesc: "",
      taskTitle: "",
      taskLink: "",
      authorLink: ""
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
  computed: {
    previewText() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      });
      return marked(this.taskDesc);
    }
  },
  methods: {
    submitForm() {
      if (this.$v.$invalid) return false;
      const {
        taskTitle,
        taskLink,
        taskDesc,
        previewText,
        authorLink,
        tags
      } = this;
      const tagsList = tags.map(tag => tag.text);
      console.log("Form data:", tags, {
        taskTitle,
        taskLink,
        taskDesc,
        previewText,
        authorLink,
        tagsList
      });
    },
    useMarkdowns() {}
  }
};
</script>

<style>
@import "./style/taskForm.css";
@import "./style/tags.css";
</style>

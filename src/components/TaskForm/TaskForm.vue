<template>
  <div class="task-form">
    <div class="task-form__wrapper">
      <form class="task-form__elem">
        <div class="task-form__item">
          <label for="taskTitle">Task title</label>
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
          <label for="taskLink">Link to task</label>
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
          <label for="taskDesc">Task description</label>
          <textarea
            id="taskDesc"
            rows="16"
            class="form-control"
            @blur="$v.taskDesc.$touch()"
            v-model="taskDesc"
            :class="{'is-invalid': $v.taskDesc.$error}"
          ></textarea>
          <div class="well well-sm pre-scrollable" v-html="previewText"></div>
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
          <label for="taskLink">Link to author</label>
          <input id="authorLink" type="text" placeholder="Example: ">
          <div class="task-form__message-wrapper">
            <p
              class="task-form__message"
            >You can also write your email or link to social networks if you want to discuss the details with the developer</p>
          </div>
        </div>
        <div class="task-form__item task-form__item--button">
          <button class="button">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import { required } from "vuelidate/lib/validators";
export default {
  name: "TaskForm",
  data() {
    return {
      taskDesc: "",
      taskTitle: "",
      taskLink: ""
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
      console.log("marked(this.taskDesc)", marked(this.taskDesc));
      //   return marked(this.md_text);
    }
  }
};
</script>

<style>
@import "./style/taskForm.css";
</style>

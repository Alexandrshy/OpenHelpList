<template>
  <div class="task-form">
    <div class="task-form__wrapper">
      <form class="task-form__elem">
        <div class="task-form__item">
          <label for="taskTitle">Task title</label>
          <input id="taskTitle" type="text" placeholder="Example: ">
        </div>
        <div class="task-form__item">
          <label for="taskLink">Link to task</label>
          <input id="taskLink" type="text" placeholder="Example: ">
        </div>
        <div class="task-form__item">
          <label for="taskDesc">Task description</label>
          <textarea
            id="taskDesc"
            rows="16"
            class="form-control"
            v-model="md_text"
            placeholder="Example: "
          ></textarea>
          <div class="well well-sm pre-scrollable" v-html="previewText"></div>
        </div>
        <div class="task-form__item">
          <button class="button">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "TaskForm",
  data() {
    return {
      md_text: "# Title"
    };
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
      console.log("marked(this.md_text)", marked(this.md_text));
      //   return marked(this.md_text);
    }
  }
};
</script>

<style>
@import "./style/taskForm.css";
</style>

<template>
  <div id="editor">
    <p>123</p>
    <textarea style="height:auto" rows="16" class="form-control" v-model="md_text"></textarea>
    <div class="well well-sm pre-scrollable" v-html="previewText"></div>
  </div>
</template>


<script>
import marked from "marked";
export default {
  name: "editor",
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

<style scoped>
</style>

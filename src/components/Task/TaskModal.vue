<template>
  <section class="card">
    <div class="card__header">
      <div class="card__header-content content-meta">
        <div class="card__header-meta-part content-meta-part">
          <span class="card__header-meta-title">Project</span>
          <a class="card__header-meta-link" :href="task.projectLink">{{task.project}}</a>
        </div>
        <div
          class="card__header-meta-part content-meta-part content-meta-part--right"
          v-if="task.author"
        >
          <span class="card__header-meta-title">Author</span>
          <a class="card__header-meta-link" :href="task.authorLink">{{task.author}}</a>
        </div>
      </div>
    </div>
    <div class="card__main">
      <h3 class="card__title">{{task.title}}</h3>
      <div class="card__description description" v-html="previewText(task.description)"></div>
      <ul class="tags-list" v-if="task.tag && task.tag.length">
        <li class="tags-item" v-for="tag in task.tag" :key="tag">#{{tag}}</li>
      </ul>
    </div>
    <div class="card__foter">
      <div class="card__social social-link">
        <div class="card__social-item social-link__wrapper">
          <span class="card__social-title social-link__title">Link:</span>
          <a
            :href="task.projectissue"
            class="task__item-social-link social-link__item"
          >Start working</a>
        </div>
        <div class="card__social-item social-link__wrapper">
          <span class="task__item-social-title social-link__title">Share:</span>
          <a href="#" class="task__item-social-link social-link__item">Tweet</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from "marked";
export default {
  name: "task",
  props: ["id"],
  computed: {
    task() {
      const id = this.id;
      return this.$store.getters.taskById(id);
    }
  },
  methods: {
    previewText(text) {
      marked.setOptions({
        smartLists: true,
        smartypants: false
      });

      return marked(text);
    }
  }
};
</script>

<style>
@import "./style/taskModal.css";
@import "./style/description.css";
@import "./style/indexItem.css";
</style>

<template>
  <li :id="`task-${task.id}`" class="task__item">
    <div class="task__logo-part">
      <img class="task__logo" :src="`${task.projectLogo}`" :alt="`${task.project} logo`">
    </div>
    <div class="task__desc-part">
      <div class="task__item-header">
        <div class="task__content-meta content-meta">
          <div class="task__content-meta-part content-meta-part">
            <span class="task__content-meta-title">Project</span>
            <a
              class="task__content-meta-link task__project-title"
              :href="task.projectLink"
            >{{task.project}}</a>
          </div>
          <div
            class="task__content-meta-part content-meta-part content-meta-part--right"
            v-if="task.author"
          >
            <span class="task__content-meta-title">Author</span>
            <a class="task__content-meta-link task__author" :href="task.authorLink">{{task.author}}</a>
          </div>
        </div>
      </div>
      <div class="task__item-main">
        <h3 class="task__title">{{task.title}}</h3>
        <div class="task__description-wrapper">
          <div class="task__description description" v-html="previewText(task.description)"></div>
        </div>
        <ul class="tags-list" v-if="task.tag && task.tag.length">
          <li class="tags-item" v-for="tag in task.tag" :key="tag">#{{tag}}</li>
        </ul>
      </div>
      <div class="task__item-footer social-link">
        <div class="task__item-social-item social-link__wrapper">
          <span class="task__item-social-title social-link__title">Link:</span>
          <a
            :href="task.projectissue"
            class="task__item-social-link social-link__item"
          >Start working</a>
          <router-link
            class="link task__item-social-link social-link__item"
            :to="{name: 'Task item', params: {id: task.id}}"
          >More detailed</router-link>
        </div>
        <div class="task__item-social-item social-link__wrapper">
          <span class="task__item-social-title social-link__title">Share:</span>
          <a href="#" class="task__item-social-link social-link__item">Tweet</a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import marked from "marked";
export default {
  name: "taskItem",
  props: ["task"],
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
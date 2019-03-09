<template>
  <div
    :id="`task-${task.id}`"
    class="task__item"
    :class="{'task__item--completed': task.completed}"
    :style="{order: index}"
  >
    <section class="task__item-wrapper">
      <task-logo :img="task.projectLogo" :alt="task.project"></task-logo>
      <div class="task__desc-part">
        <div class="task__item-header">
          <div class="task__content-meta content-meta">
            <div class="task__content-meta-part content-meta-part" v-if="task.project">
              <span class="task__content-meta-title">Project</span>
              <a
                class="task__content-meta-link task__project-title"
                :href="task.projectLink"
                v-if="task.projectLink"
              >{{task.project}}</a>
              <span class="task__content-meta-link task__project-title" v-else>{{task.project}}</span>
            </div>
            <div
              class="task__content-meta-part content-meta-part"
              :class="{'content-meta-part--right': task.project}"
              v-if="task.authorName"
            >
              <span class="task__content-meta-title">Author</span>
              <a
                class="task__content-meta-link task__author"
                :href="task.authorLink"
                v-if="task.authorLink"
              >{{task.authorName}}</a>
              <span class="task__content-meta-link task__author" v-else>{{task.authorName}}</span>
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
        <div class="task__item-footer social-link" v-if="!preview && !editable">
          <div class="task__item-social-item social-link__wrapper">
            <span class="task__item-social-title social-link__title">Link:</span>
            <a :href="task.link" class="task__item-social-link social-link__item">Start working</a>
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
    </section>
    <task-control-panel :taskID="task.id" :taskCompleted="task.completed" :typePage="typePage"></task-control-panel>
  </div>
</template>

<script>
import marked from "marked";
import TaskLogo from "./TaskLogo.vue";
import TaskControlPanel from "./TaskControlPanel.vue";
export default {
  components: {
    taskLogo: TaskLogo,
    taskControlPanel: TaskControlPanel
  },
  name: "taskItem",
  props: {
    index: {
      default: "0",
      type: String
    },
    task: {
      type: Object
    },
    preview: {
      default: false,
      type: Boolean
    },
    editable: {
      default: false,
      type: Boolean
    },
    typePage: {
      default: "Element",
      type: String
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
@import "./style/taskItem.css";
@import "./style/description.css";
@import "./style/indexItem.css";
</style>
 
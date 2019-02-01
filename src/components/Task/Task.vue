<template>
  <div class="task">
    <div class="task__wrapper">
      <tabs v-on:clickTab="setActivetab">
        <tab name="Open task" :length="tasks.length" :selected="activeTab === 'Open task'">
          <li class="task__item" v-for="task in tasks" :key="task.id">
            <div class="task__logo-part">
              <img class="task__logo" :src="`${task.projectLogo}`" :alt="`${task.project} logo`">
            </div>
            <div class="task__desc-part">
              <div class="task__item-header">
                <div class="task__content-meta">
                  <div class="task__content-meta-part">
                    <span class="task__content-meta-title">Project</span>
                    <a
                      class="task__content-meta-link task__project-title"
                      href="`${task.projectLink}`"
                    >{{task.project}}</a>
                  </div>
                  <div
                    class="task__content-meta-part task__content-meta-part--author"
                    v-if="task.author"
                  >
                    <span class="task__content-meta-title">Author</span>
                    <a
                      class="task__content-meta-link task__author"
                      href="`${task.authorLink}`"
                    >{{task.author}}</a>
                  </div>
                </div>
              </div>
              <div class="task__item-main">
                <h3 class="task__title">{{task.title}}</h3>
                <div class="task__description-wrapper">
                  <div class="task__description" v-html="cropping(task.description, 450)"></div>
                </div>
                <ul class="task__tags-list" v-if="task.tag && task.tag.length">
                  <li class="task__tags-item" v-for="tag in task.tag" :key="tag">#{{tag}}</li>
                </ul>
              </div>
              <div class="task__item-footer">
                <div class="task__item-social-item">
                  <span class="task__item-social-title">Link:</span>
                  <a :href="task.projectissue" class="task__item-social-link">Start working</a>
                  <a href="#" class="task__item-social-link">More detailed</a>
                </div>
                <div class="task__item-social-item">
                  <span class="task__item-social-title">Share:</span>
                  <a href="#" class="task__item-social-link">Tweet</a>
                </div>
              </div>
            </div>
          </li>
        </tab>
        <tab name="Closed task" :length="tasks.length" :selected="activeTab === 'Closed task'">
          <li class="task__item" v-for="task in tasks" :key="task.id">
            <div class="task__logo-part">
              <img class="task__logo" :src="`${task.projectLogo}`" :alt="`${task.project} logo`">
            </div>
            <div class="task__desc-part">
              <div class="task__item-header">
                <div class="task__content-meta">
                  <div class="task__content-meta-part">
                    <span class="task__content-meta-title">Project</span>
                    <a
                      class="task__content-meta-link task__project-title"
                      href="`${task.projectLink}`"
                    >{{task.project}}</a>
                  </div>
                  <div class="task__content-meta-part task__content-meta-part--author">
                    <span class="task__content-meta-title">Author</span>
                    <a
                      class="task__content-meta-link task__author"
                      href="`${task.authorLink}`"
                    >{{task.author}}</a>
                  </div>
                </div>
              </div>
              <div class="task__item-main">
                <h3 class="task__title">{{task.title}}</h3>
                <div class="task__description" v-html="task.description"></div>
              </div>
              <div class="task__item-footer">
                <div class="task__item-social-item">
                  <a :href="task.projectissue" class="task__item-social-link">Start working</a>
                </div>
                <div class="task__item-social-item">
                  <span class="task__item-social-title">Share:</span>
                  <a href="#" class="task__item-social-link">Tweet</a>
                </div>
              </div>
            </div>
          </li>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import Tabs from "../Tabs/Tabs.vue";
import Tab from "../Tabs/Tab.vue";
export default {
  name: "task",
  components: {
    tabs: Tabs,
    tab: Tab
  },
  data() {
    return {
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
      ],
      activeTab: "Open task"
    };
  },
  methods: {
    setActivetab(tabName) {
      this.activeTab = tabName;
    },
    cropping(value, limit) {
      return value.substring(0, limit) + "...";
    }
  }
};
</script>

<style>
@import "./style/task.css";
</style>
 
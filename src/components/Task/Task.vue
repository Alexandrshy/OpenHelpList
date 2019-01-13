<template>
  <div class="task">
    <div class="task__wrapper">
      <tabs>
        <tab name="Open task" :selected="true">
          <li class="task__item" v-for="task in tasks" :key="task.id">
            <div class="task__logo-part">
              <img class="task__logo" :src="`${task.projectLogo}`" :alt="`${task.project} logo`">
            </div>
            <div class="task__desc-part">
              <div class="task__item-header">
                <a
                  class="task__header-link task__project-title"
                  href="`${task.projectLink}`"
                >{{task.project}}</a>
                <a
                  class="task__header-link task__author"
                  href="`${task.authorLink}`"
                >{{task.author}}</a>
              </div>
              <div class="task__item-main">
                <h3 class="task__title">{{task.title}}</h3>
                <div class="task__description" v-html="task.description"></div>
              </div>
              <div class="task__item-footer">
                <a :href="task.projectissue" class="task__item-footer-link">Start working</a>
                <a href="#" class="task__item-footer-link">Tweet</a>
              </div>
            </div>
          </li>
        </tab>
        <tab name="Closed task">2222</tab>
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
            "<p>Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md</p>",
          language: "JavaScript",
          level: "junior",
          completed: false
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
    };
  }
};
</script>

<style>
@import "./style/task.css";
</style>
 
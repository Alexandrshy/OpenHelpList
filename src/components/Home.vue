<template>
  <div class="container">
    <section class="page-selector">
      <p class="title">OpenHelpList</p>
      <h1 class="h1">Open source projects need you</h1>
      <p
        class="subtitle"
      >Want to grow as a developer and find great work? Do not wipe your pants - engage Open Source projects. So the easiest way to get into the best development teams and put yourself in the summary of this project.</p>
      <button class="button">Help</button>
      <div class="task">
        <div class="task__wrapper">
          <div class="row">
            <div class="col-sm-3">
              <div class="task__switch">
                <button>Open task</button>
                <button>Closed task</button>
              </div>
            </div>
            <div class="col-sm-9">
              <ul class="task__list">
                <li class="task__item" v-for="task in tasks" :key="task.id">
                  <div class="task__logo-part">
                    <img
                      class="task__logo"
                      :src="`${task.projectLogo}`"
                      :alt="`${task.project} logo`"
                    >
                  </div>
                  <div class="task__desc-part">
                    <div class="task__item-header">
                      <a class="task__project-title" href="`${task.projectLink}`">{{task.project}}</a>
                      <a class="task__author" href="`${task.authorLink}`">{{task.author}}</a>
                    </div>
                    <div class="task__item-main"></div>
                    <div class="task__item-footer"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
          title: "Modify README.md",
          description:
            "Modify README.md Modify README.md Modify README.md Modify README.md Modify README.md",
          language: "JavaScript",
          level: "junior",
          completed: false
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../style/home/index.css";
@import "../style/task/index.css";
</style>

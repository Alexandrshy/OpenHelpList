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
          <ul class="task__list">
            <li class="task__item"></li>
          </ul>
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
          author: "Kaol-Fu",
          authorLink: "https://github.com/Kaol-Fu",
          project: "puppeteer",
          projectLink: "https://github.com/GoogleChrome/puppeteer",
          projectLogo:
            "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
          title:
            "Puppeteer ignores some CSS rules to print PDF when I used the @media print",
          description:
            "Set some CSS rules in @media print, then print the html to pdf. You can find some element's CSS rules are ignored by Puppeteer."
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../style/home/index.css";
</style>

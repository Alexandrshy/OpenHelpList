<template>
  <div class="container">
    <section class="page-selector">
      <title-project></title-project>
      <h1 class="h1">About</h1>
      <twitter url="/" title="Check me on Github" scale="3"></twitter>
    </section>
  </div>
</template>

<script>
import TitleProject from "../TitleProject/TitleProject.vue";
import Twitter from "../Share/Twitter.vue";
export default {
  components: {
    titleProject: TitleProject,
    Twitter
  }
};
</script>

<style scoped>
</style>

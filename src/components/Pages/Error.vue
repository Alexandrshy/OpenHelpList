<template>
  <div class="container">
    <section class="page-selector">
      <div class="page-initial-screen">
        <title-project></title-project>
        <h1 class="h1">404!</h1>
        <p class="subtitle">Sorry, that page doesn’t exist!
          <br>Please check the URL or
          <router-link to="/">return to the homepage</router-link>.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import TitleProject from "@/components/TitleProject/TitleProject.vue";
export default {
  components: {
    titleProject: TitleProject
  }
};
</script>
<template>
  <div class="container">
    <section class="page-selector">
      <div class="page-initial-screen">
        <title-project></title-project>
        <h1 class="h1">{{name}}</h1>
        <p class="subtitle">{{email}}</p>
        <router-link class="button task__button" to="/post-a-task">Post a task</router-link>
        <button class="button" @click="clickSingOutButton">Log Out</button>
      </div>
    </section>
  </div>
</template>

<script>
import TitleProject from "@/components/TitleProject/TitleProject.vue";
export default {
  components: {
    titleProject: TitleProject
  },
  computed: {
    name() {
      return this.$store.getters.userName;
    },
    email() {
      return this.$store.getters.userEmail;
    }
  },
  methods: {
    clickSingOutButton() {
      this.$store.dispatch("authUserSingOut");
    }
  }
};
</script>


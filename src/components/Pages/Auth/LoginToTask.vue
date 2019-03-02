<template>
  <div class="container">
    <section class="page-selector">
      <div class="page-initial-screen">
        <title-project></title-project>
        <h1 class="h1">Login</h1>
        <p
          class="subtitle"
        >To create new tasks, log in using one of the social networks. This will help you manage your tasks and close them when they are completed.</p>
        <button class="button" @click="clickGoogleButton">Google</button>
        <button class="button" @click="clickGoogleGitHub">GitHub</button>
      </div>
    </section>
  </div>
</template>

<script>
import TitleProject from "@/components/TitleProject/TitleProject.vue";
export default {
  beforeCreate() {
    this.$store.dispatch("clearMessage");
    this.$store.dispatch("setBtnLoadingStatus", "Login");
  },
  components: {
    titleProject: TitleProject
  },
  methods: {
    clickGoogleButton() {
      this.$store.dispatch("authUserUsingGoogle", { url: "/post-a-task" });
    },
    clickGoogleGitHub() {
      this.$store.dispatch("authUserUsingGitHub", { url: "/post-a-task" });
    }
  }
};
</script>

<style>
.button {
  margin-right: 3rem;
}

.button:last-child {
  margin-right: 0;
}

@media (max-width: 768px) {
  .button {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .button {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}
</style>

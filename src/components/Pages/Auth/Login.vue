<template>
  <div>
    <h1>Login</h1>
    <button class="button" @click="clickGoogleButton">Google</button>
    <button class="button" @click="clickGoogleGitHub">GitHub</button>
    
    <button class="button" @click="clickSingOutButton">signOut</button>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  beforeCreate() {
    this.$store.dispatch("clearMessage");
    this.$store.dispatch("setBtnLoadingStatus", "Login");
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: { required },
    password: { required, minLength: minLength(6) }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    btnLoadingStatus() {
      return this.$store.getters.btnLoadingStatus;
    },
    message() {
      return this.$store.getters.message;
    },
    status() {
      return this.$store.getters.status;
    }
  },
  methods: {
    clickGoogleButton() {
      this.$store
        .dispatch("authUserUsingGoogle")
        .then(() => this.$router.push("/post-a-task"));
    },
    clickGoogleGitHub() {
      this.$store.dispatch("authUserUsingGitHub");
    },
    clickSingOutButton() {
      this.$store.dispatch("authUserSingOut");
    }
  }
};
</script>

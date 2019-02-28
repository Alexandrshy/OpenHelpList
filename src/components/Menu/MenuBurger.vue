<template>
  <button class="burger-menu" :class="{'is-active': isMenuShow}" @click="switchMenu">
    <span class="burger-menu__inner"></span>
  </button>
</template>

<script>
export default {
  name: "menuBurger",
  methods: {
    switchMenu() {
      this.$store.dispatch("switchMenu");
    }
  },
  computed: {
    isMenuShow() {
      return this.$store.getters.isMenuShow;
    }
  }
};
</script>

<style>
@import "./style/burgerMenu.css";
</style>
 
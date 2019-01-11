<template>
  <button class="burger-menu" :class="{'is-active': isMenuShow}" @click="switchMenu">
    <span class="burger-menu__inner"></span>
  </button>
</template>

<script>
export default {
  name: "menuBurger",
  props: ["isMenuShow", "switchMenu"]
};
</script>

<style>
@import "./style/burgerMenu.css";
</style>
 
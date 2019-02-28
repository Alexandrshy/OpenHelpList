<template>
  <div class="container">
    <nav class="breadcrumbs">
      <ul class="breadcrumbs__list">
        <li class="breadcrumbs__item" v-for="link in linkMenu" :key="link.title">
          <router-link class="breadcrumbs__link" :to="link.url">{{link.title}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    linkMenu() {
      return this.$store.getters.linkMenu;
    }
  }
};
</script>

<style>
@import "./style/breadcrumbs";
</style>

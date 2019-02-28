<template>
  <div id="app">
    <custom-header></custom-header>
    <menu-burger></menu-burger>
    <main class="main">
      <router-view></router-view>
      <breadcrumbs></breadcrumbs>
    </main>
    <custom-menu></custom-menu>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs.vue";
import MenuBurger from "./components/Menu/MenuBurger.vue";
import Menu from "./components/Menu/Menu.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  components: {
    customHeader: Header,
    breadcrumbs: Breadcrumbs,
    customFooter: Footer,
    menuBurger: MenuBurger,
    customMenu: Menu
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("setLocation", from);
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  }
};
</script>

<style>
@import "normalize.css/normalize.css";
@import "style/main/main.css";
</style>
 
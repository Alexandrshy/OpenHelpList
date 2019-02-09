<template>
  <div id="app">
    <custom-header></custom-header>
    <menu-burger :isMenuShow="isMenuShow" :switchMenu="switchMenu"></menu-burger>
    <main class="main">
      <router-view></router-view>
    </main>
    <custom-menu :isMenuShow="isMenuShow" :closeMenu="closeMenu"></custom-menu>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import MenuBurger from "./components/Menu/MenuBurger.vue";
import Menu from "./components/Menu/Menu.vue";
export default {
  components: {
    customHeader: Header,
    customFooter: Footer,
    menuBurger: MenuBurger,
    customMenu: Menu
  },
  data() {
    return {
      isMenuShow: false
    };
  },
  methods: {
    switchMenu() {
      this.isMenuShow = !this.isMenuShow;
    },
    closeMenu() {
      this.isMenuShow = false;
    }
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("setLocation", from);
    }
  }
};
</script>

<style>
@import "normalize.css/normalize.css";
@import "style/main/main.css";
</style>
 
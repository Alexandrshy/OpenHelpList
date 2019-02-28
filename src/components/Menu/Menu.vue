<template>
  <div class="menu" :class="{'is-active': isMenuShow}">
    <nav class="menu__wrapper">
      <div class="menu__box">
        <ul class="menu__list">
          <li class="menu__item" v-for="link in linkMenu" :key="link.title" @click="closeMenu">
            <router-link class="menu__link" :to="link.url">{{link.title}}</router-link>
          </li>
        </ul>
        <ul class="menu__list menu__list--social">
          <li class="menu__social" v-for="link in linkSocial" :key="link.title">
            <a
              href="`${link.url}`"
              :class="`menu__social-link menu__social-link--${link.title}`"
            >{{link.title }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "customMenu",
  methods: {
    closeMenu() {
      this.$store.dispatch("closeMenu");
    }
  },
  computed: {
    linkMenu() {
      return this.$store.getters.linkMenu;
    },
    linkSocial() {
      return this.$store.getters.linkSocial;
    },
    isMenuShow() {
      return this.$store.getters.isMenuShow;
    }
  }
};
</script>

<style>
@import "./style/menu.css";
</style>
 
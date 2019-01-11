<template>
  <div class="menu" :class="{'is-active': isMenuShow}">
    <nav class="menu__wrapper">
      <div class="menu__box">
        <ul class="menu__list">
          <li class="menu__item" v-for="link in linkMenu" :key="link.title" @click="closeMenu">
            <router-link class="menu__link" :to="`${link.url}`">{{link.title}}</router-link>
          </li>
        </ul>
        <ul class="menu__list menu__list--social">
          <li class="menu__social" v-for="link in linkSocial" :key="link.title">
            <a href="`${link.url}`" :class="`menu__social-link menu__social-link--${link.title}`"></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "customMenu",
  props: ["isMenuShow", "closeMenu"],
  data() {
    return {
      menuShow: false,
      linkMenu: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" }
        // { title: "Login", url: "/login" },
        // { title: "Registration", url: "/registration" }
      ],
      linkSocial: [
        { title: "twitter", url: "/" },
        { title: "linkedin", url: "/" }
      ]
    };
  }
};
</script>

<style>
@import "./style/menu.css";
</style>
 
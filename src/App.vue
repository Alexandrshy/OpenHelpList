<template>
  <div id="app">
    <header class="header">
      <router-link to="/">logo</router-link>
    </header>
    <button class="burger-menu" :class="{'is-active': menuShow}" @click="menuShow = !menuShow">
      <span class="burger-menu__inner"></span>
    </button>
    <router-view></router-view>
    <div class="menu" :class="{'is-active': menuShow}">
      <nav class="menu__wrapper">
        <div class="menu__box">
          <ul class="menu__list">
            <li
              class="menu__item"
              v-for="link in linkMenu"
              :key="link.title"
              @click="menuShow = false"
            >
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
    <footer class="footer">
      <p class="footer__desc">
        Made with ❤️in Russia by
        <a
          class="footer__link"
          href="https://twitter.com/@alexandrshy"
        >@alexandrshy</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
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
@import "normalize.css/normalize.css";
@import "style/main/main.css";
</style>

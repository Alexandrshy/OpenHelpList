<template>
  <transition v-bind:css="false" v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal">
      <div class="modal__overlay is-visible" @click="handleClose"></div>
      <div class="modal__container">
        <div class="modal__wrapper">
          <button class="modal__close" @click="handleClose"></button>
          <div class="modal__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { TweenMax, Power4 } from "gsap";
export default {
  name: "modal",
  created() {
    document.documentElement.className = "is-modal-visible";
  },
  destroyed() {
    document.documentElement.className = "";
  },
  methods: {
    enter(el, done) {
      TweenMax.fromTo(
        el,
        0.5,
        {
          alpha: 0
        },
        {
          alpha: 1,
          ease: Power4.easeOut
        }
      );
    },
    leave(el, done) {
      TweenMax.to(el, 0.5, {
        alpha: 0,
        ease: Power4.easeOut,
        onComplete: done
      });
    },
    handleClose() {
      console.log(this.$router);
      this.$router.go(-1);
    }
  }
};
</script>

<style>
@import "./style/modal.css";
</style>

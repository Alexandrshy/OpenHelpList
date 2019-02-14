<template>
  <transition v-bind:css="false" v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal">
      <div class="modal__container">
        <div class="modal__overlay is-visible" @click="handleClose"></div>
        <div class="modal__wrapper">
          <button class="modal__close" @click="handleClose"></button>
          <div class="modal__content">
            <slot v-if="existenceTask"></slot>
            <h2 class="modal__error" v-else>Unfortunately, there is no such task...</h2>
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
  data() {
    return {
      existenceTask: Boolean(
        this.$store.getters.taskById(this.$route.params.id)
      )
    };
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
      if (this.$store.getters.getLocation) {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
@import "./style/modal.css";
</style>

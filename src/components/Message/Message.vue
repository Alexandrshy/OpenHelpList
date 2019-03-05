<template>
  <transition name="message">
    <div
      class="message"
      :class="{'is-invalid': status === 'error', 'is-successful': status === 'successful'}"
      v-if="status"
    >
      <div class="message__wrapper">
        <h3 class="message__title">{{title}}</h3>
        <p class="message__text">{{message}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "message",
  computed: {
    status() {
      return this.$store.getters.status;
    },
    title() {
      return this.$store.getters.title;
    },
    message() {
      return this.$store.getters.message;
    }
  }
};
</script>


<style>
@import "./style/message.css";
</style>

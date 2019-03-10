<template>
  <transition name="message">
    <div
      class="message"
      :class="{'is-invalid': status === 'error', 'is-successful': status === 'successful', 'is-confirm': status === 'confirm'}"
      v-if="status"
    >
      <div class="message__wrapper">
        <h3 class="message__title">{{title}}</h3>
        <p class="message__text">{{message}}</p>
        <div class="message__control-panel">
          <button class="button message__button" @click="deleteTask">Yes</button>
          <button class="button message__button" @click="closeMessage">No</button>
        </div>
        <button class="message__close" @click="closeMessage">
          <span class="message__close-inner"></span>
        </button>
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
  },
  methods: {
    closeMessage() {
      this.$store.dispatch("clearMessage");
    },
    deleteTask() {
      const key = this.$store.getters.messageData;
      this.$store.dispatch("deleteTask", { key }).then(() => {
        this.$store.dispatch("clearMessage");
      });
    }
  }
};
</script>


<style>
@import "./style/message.css";
</style>

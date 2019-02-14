<template>
  <div class="task__logo-part">
    <img class="task__logo" :src="getLogo" :alt="`${alt} logo`">
  </div>
</template>

<script>
export default {
  props: {
    img: "",
    alt: {
      default: "Task"
    }
  },
  computed: {
    getLogo() {
      if (this.img) return this.img;
      const listLogo = this.$store.state.logoList.logo;
      const index = Math.floor(Math.random() * Math.floor(listLogo.length));
      return listLogo[index];
    }
  }
};
</script>

<template>
  <div class="modal__wrapper">
    <p>{{task && task.description}}</p>
  </div>
</template>

<script>
export default {
  name: "task",
  props: ["id"],
  computed: {
    task() {
      const id = this.id;
      return this.$store.getters.taskById(id);
    }
  }
};
</script>

<style>
</style>

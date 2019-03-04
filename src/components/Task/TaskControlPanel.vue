<template>
  <div v-if="typePage === 'Profile'" class="task__control-panel">
    <button class="task__control-button">Edit</button>
    <button class="task__control-button">Close</button>
    <button class="task__control-button" @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  name: "taskControlPanel",
  props: {
    typePage: {
      default: "Element",
      type: String
    },
    taskID: {
      require: true
    }
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", { key: this.taskID });
    }
  }
};
</script>

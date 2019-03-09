<template>
  <div v-if="typePage === 'Profile'" class="task__control-panel">
    <button class="task__control-button">Edit</button>
    <button
      class="task__control-button"
      @click="updateCompletedTask"
    >{{taskCompleted ? 'Open' : 'Close'}}</button>
    <button class="task__control-button task__control-button--delete" @click="deleteTask">Delete</button>
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
    },
    taskCompleted: {
      require: true
    }
  },
  data() {
    return {
      timer: null
    };
  },
  methods: {
    updateCompletedTask() {
      this.$store
        .dispatch("updateCompleted", {
          key: this.taskID,
          updatedCompletedStatus: !this.taskCompleted
        })
        .then(() => {
          if (this.timer) clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.$store.dispatch("clearMessage");
          }, 5000);
        });
    },
    deleteTask() {
      this.$store.dispatch("deleteTask", { key: this.taskID });
    }
  }
};
</script>

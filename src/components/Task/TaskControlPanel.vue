<template>
  <div v-if="typePage === 'Profile'" class="task__control-panel">
    <router-link :to="`/edit-task/${taskID}`" class="task__control-button" tag="button">Edit</router-link>
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
  methods: {
    editTask() {
      this.$router.push(`/edit-task/${this.taskID}`);
    },
    updateCompletedTask() {
      this.$store
        .dispatch("updateCompleted", {
          key: this.taskID,
          updatedCompletedStatus: !this.taskCompleted
        })
        .then(() => {
          const timer = this.$store.getters.timer;
          if (timer) clearTimeout(timer);
          this.$store.dispatch(
            "setTimerID",
            setTimeout(() => {
              this.$store.dispatch("clearMessage");
            }, 5000)
          );
        });
    },
    deleteTask() {
      this.$store.dispatch("requestDeleteTask", { key: this.taskID });
    }
  }
};
</script>

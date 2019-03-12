<template>
  <div class="container">
    <section class="page-selector">
      <div class="page-initial-screen">
        <title-project></title-project>
        <h1 class="h1">Post a task</h1>
        <p
          class="subtitle"
        >You have your own small side project and you need help with solving some problem? Or do you want to try yourself as a mentor and reviewer? Describe your task and we will tell everyone about it!</p>
      </div>
      <task-form :taskData="editTaskData"></task-form>
    </section>
  </div>
</template>

<script>
import TitleProject from "@/components/TitleProject/TitleProject.vue";
import TaskForm from "@/components/TaskForm/TaskForm.vue";
export default {
  components: {
    titleProject: TitleProject,
    taskForm: TaskForm
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    editTaskData() {
      return this.$store.getters.taskById(this.id);
    }
  }
};
</script>


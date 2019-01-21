<template>
  <div class="container">
    <section class="page-selector">
      <div class="page-initial-screen">
        <title-project></title-project>
        <h1 class="h1">Open source projects need you</h1>
        <p
          class="subtitle"
        >Want to grow as a developer and find great work? Do not wipe your pants - engage Open Source projects. So the easiest way to get into the best development teams and put yourself in the summary of this project.</p>
        <button class="button">Help</button>
      </div>
      <task></task>
    </section>
  </div>
</template>

<script>
import TitleProject from "@/components/TitleProject/TitleProject.vue";
import Task from "@/components/Task/Task.vue";
export default {
  components: {
    titleProject: TitleProject,
    task: Task
  }
};
</script>

<template>
  <div class="task">
    <div class="task__wrapper">
      <tabs v-on:clickTab="setActivetab">
        <tab name="Open task" :length="openTasksLength" :selected="activeTab === 'Open task'">
          <task-item v-for="task in openTasks" :key="task.id" :task="task"></task-item>
        </tab>
        <tab
          name="Closed task"
          :length="completeTasksLength"
          :selected="activeTab === 'Closed task'"
        >
          <task-item v-for="task in completeTasks" :key="task.id" :task="task"></task-item>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import Tabs from "../Tabs/Tabs.vue";
import Tab from "../Tabs/Tab.vue";
import TaskItem from "./TaskItem.vue";
export default {
  name: "task",
  components: {
    tabs: Tabs,
    tab: Tab,
    taskItem: TaskItem
  },
  data() {
    return {
      activeTab: "Open task"
    };
  },
  computed: {
    completeTasks() {
      return this.$store.getters.completeTasks;
    },
    completeTasksLength() {
      return this.$store.getters.completeTasksLength;
    },
    openTasks() {
      return this.$store.getters.openTasks;
    },
    openTasksLength() {
      return this.$store.getters.openTasksLength;
    }
  },
  methods: {
    setActivetab(tabName) {
      this.activeTab = tabName;
    }
  }
};
</script>

<style>
@import "./style/task.css";
@import "./style/description.css";
@import "./style/index.css";
</style>
 
<template>
  <div class="task" v-if="openTasksLength > 0 || completeTasksLength > 0">
    <div class="task__wrapper">
      <tabs v-on:clickTab="setActivetab">
        <tab
          name="Open task"
          :length="openTasksLength"
          :selected="activeTab === 'Open task'"
          v-if="openTasksLength > 0"
        >
          <task-item
            v-for="(task, index) in openTasks"
            :key="task.id"
            :task="task"
            :index="String(index)"
          ></task-item>
          <div
            class="task__item task__item--additional"
            style="order: 1;"
            v-if="openTasksLength > 0"
          >
            <section class="task__item-wrapper task__item-wrapper--additional">
              <div class="task__desc-part task__desc-part--full-width">
                <h3 class="task__title task__title--additional">— Can I post my task on this list?</h3>
                <p
                  class="task__subtitle"
                >Of course! If you have your own Open Source project, and you need help solving any problem, you can post your task on this list. This list is necessary so that developers can develop useful and interesting projects together.</p>
                <p
                  class="task__subtitle"
                >To find someone who will want to help develop your project, prepare a detailed description of your task. And be ready to take part in all stages from discussion to code review. All this is very important!</p>
                <router-link class="button task__button" to="/post-a-task">Post a task</router-link>
              </div>
            </section>
          </div>
          <div
            class="task__item task__item--additional"
            style="order: 5;"
            v-if="openTasksLength > 2"
          >
            <section class="task__item-wrapper task__item-wrapper--additional">
              <div class="task__desc-part task__desc-part--full-width">
                <h3
                  class="task__title task__title--additional"
                >— How to find out what task you can still get to work?</h3>
                <p
                  class="task__subtitle"
                >It's very simple, take any open task. If you are interested in the task - take it and do it! Tasks are not "booked" for developers, anyone can offer their solution. Even if someone makes the task faster than you, do not stop - your solution may be better. This is Open Source!</p>
              </div>
            </section>
          </div>
        </tab>
        <tab
          name="Closed task"
          :length="completeTasksLength"
          :selected="activeTab === 'Closed task'"
          v-if="completeTasksLength > 0"
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
</style>
 
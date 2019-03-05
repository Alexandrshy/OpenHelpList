<template>
  <div class="container">
    <section class="page-selector">
      <div class="page-initial-screen">
        <title-project></title-project>
        <h1 class="h1">{{name}}</h1>
        <p class="subtitle">{{email}}</p>
        <router-link class="button" to="/post-a-task">Post a task</router-link>
        <button class="button" @click="clickSingOutButton">Log Out</button>
      </div>
      <div class="task">
        <div class="task__box task__box--profile">
          <task-item
            v-for="(task, index) in userTask"
            :key="task.id"
            :task="task"
            :index="String(index)"
            :editable="true"
            :typePage="'Profile'"
          ></task-item>
          <div class="task__item task__item--additional" v-if="userTask.length === 0">
            <section class="task__item-wrapper task__item-wrapper--additional">
              <div class="task__desc-part task__desc-part--full-width">
                <h3 class="task__title task__title--additional">You haven't tasks yet</h3>
                <p
                  class="task__subtitle"
                >All your open and closed tasks will be available to you in your profile.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleProject from "@/components/TitleProject/TitleProject.vue";
import TaskItem from "@/components/Task/TaskItem.vue";
export default {
  components: {
    titleProject: TitleProject,
    taskItem: TaskItem
  },
  computed: {
    name() {
      return this.$store.getters.userName;
    },
    email() {
      return this.$store.getters.userEmail;
    },
    userTask() {
      return this.$store.getters.userTask;
    }
  },
  methods: {
    clickSingOutButton() {
      this.$store
        .dispatch("authUserSingOut")
        .then(() => this.$router.push("/"))
        .then(() => {
          this.$store.dispatch("setMessage", {
            status: "warning",
            title: "🚪 You are logged out",
            message: "We will wait for you again!"
          });
          setTimeout(() => {
            this.$store.dispatch("clearMessage");
          }, 10000);
        });
    }
  }
};
</script>

<style>
@import "../Task/style/task.css";
@import "../Task/style/taskItem.css";
@import "../Task/style/description.css";
@import "../Task/style/indexItem.css";

.task__item--completed {
  background-color: #c8fac71f;
}

.task__item--completed .task__description-wrapper::after {
  background-image: linear-gradient(
    180deg,
    rgba(248, 254, 247, 0) 0,
    rgba(248, 254, 247, 1) 100%
  );
  background-position: 50% 50%;
  background-origin: padding-box;
  background-clip: border-box;
  background-size: auto auto;
}

.task__box--profile .task__description-wrapper::after {
  display: none;
}

.task__description-wrapper .task__box--profile {
  max-height: 100%;
}

.task__box--profile .task__description-wrapper {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>


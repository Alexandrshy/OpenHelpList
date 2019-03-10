import Vue from "vue";
import Router from "vue-router";
import Vuelidate from "vuelidate";
import { loginRedirect, profileRedirect } from "./auth-guard";
import ErrorPage from "@/components/Pages/Error";
import Home from "@/components/Pages/Home";
import About from "@/components/Pages/About";
import Contact from "@/components/Pages/Contact";
import Post from "@/components/Pages/Post";
import PostEdit from "@/components/Pages/PostEdit";
import Login from "@/components/Pages/Auth/Login";
import LoginToTask from "@/components/Pages/Auth/LoginToTask";
import Profile from "@/components/Pages/Profile";
import TaskModal from "@/components/Task/TaskModal";
import store from "../store";

Vue.use(Router);
Vue.use(Vuelidate);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "tasks/:id",
          name: "Task item",
          components: {
            task: TaskModal
          },
          props: { task: true },
          meta: {
            showModal: true
          }
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/post-a-task",
      name: "post-a-task",
      component: Post,
      beforeEnter: loginRedirect
    },
    {
      path: "/edit-task/:id",
      name: "edit-task",
      component: { task: PostEdit },
      props: {
        task: 0
      },
      redirect: to => {
        console.log("toto", store.getters.tasks);
        console.log("toto2", to.params.id);
        console.log(
          "todo3",
          store.getters.tasks.find(task => task.id === to.params.id)
        );
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: profileRedirect
    },
    {
      path: "/login-to-task",
      name: "login-to-task",
      component: LoginToTask,
      beforeEnter: profileRedirect
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: loginRedirect
    },
    {
      path: "/tasks",
      redirect: "/"
    },
    {
      path: "*",
      component: ErrorPage
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.name === "Task item") {
      return {
        selector: `task-${to.params.id}`
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  store.dispatch("clearMessage");
  next();
});

export default router;

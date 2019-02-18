import Vue from "vue";
import Router from "vue-router";
import Vuelidate from "vuelidate";
import AuthGuard from "./auth-guard";
import ErrorPage from "@/components/Pages/Error";
import Home from "@/components/Pages/Home";
import About from "@/components/Pages/About";
import Contact from "@/components/Pages/Contact";
import Post from "@/components/Pages/Post";
import Login from "@/components/Pages/Auth/Login";
import Registration from "@/components/Pages/Auth/Registration";
import TaskModal from "@/components/Task/TaskModal";

Vue.use(Router);
Vue.use(Vuelidate);

export default new Router({
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
      component: Post
      // beforeEnter: AuthGuard
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration
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

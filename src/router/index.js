import Vue from "vue";
import Router from "vue-router";
import Vuelidate from "vuelidate";
import Home from "@/components/Pages/Home";
import About from "@/components/Pages/About";
import Contact from "@/components/Pages/Contact";
import Post from "@/components/Pages/Post";
import Login from "@/components/Pages/Auth/Login";
import Registration from "@/components/Pages/Auth/Registration";

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
          path: "/:id",
          name: "task item",
          components: {},
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
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Pages/Home";
import About from "@/components/Pages/About";
import Contact from "@/components/Pages/Contact";
import Post from "@/components/Pages/Post";
import Login from "@/components/Pages/Auth/Login";
import Registration from "@/components/Pages/Auth/Registration";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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
      path: "/post",
      name: "post",
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
  ]
});

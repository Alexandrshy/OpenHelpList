// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import * as fb from "firebase";
import CONFIG from "./config";

Vue.config.productionTip = false;

Vue.use(VueResource);

/* eslint-disable no-new */
fb.initializeApp(CONFIG);
fb.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("autoLogInUser", user);
  }
  store.dispatch("fetchTasks");
  new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
  });
});

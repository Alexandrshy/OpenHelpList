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
Vue.http.options.root = "http://localhost:3000/";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  created() {
    fb.initializeApp(CONFIG);
    fb.auth().onAuthStateChanged(user => {
      console.log("user1", user);
      if (user) {
        this.$store.dispatch("autoLogInUser", user);
      }
    });
  }
});

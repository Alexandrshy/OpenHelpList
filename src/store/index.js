import Vue from "vue";
import Vuex from "vuex";
import tasks from "./modules/tasks";
import locationLast from "./modules/locationLast";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
    locationLast
  }
});

import Vue from "vue";
import Vuex from "vuex";
import tasks from "./modules/tasks";
import locationLast from "./modules/locationLast";
import logoList from "./modules/logo";
import user from "./modules/user";
import shared from "./modules/shared";
import menu from "./modules/menu";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
    locationLast,
    logoList,
    user,
    shared,
    menu
  }
});

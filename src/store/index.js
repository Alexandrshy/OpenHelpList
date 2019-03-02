import Vue from "vue";
import Vuex from "vuex";
import tasks from "./modules/tasks";
import location from "./modules/location";
import logoList from "./modules/logo";
import user from "./modules/user";
import shared from "./modules/shared";
import menu from "./modules/menu";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
    location,
    logoList,
    user,
    shared,
    menu
  }
});

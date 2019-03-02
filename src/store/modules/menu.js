export default {
  state: {
    linkMenu: [
      { title: "Home", url: "/" },
      { title: "Login", url: "/login" },
      { title: "About", url: "/about" },
      { title: "Contact", url: "/contact" }
    ],
    linkMenuRegistered: [
      { title: "Home", url: "/" },
      { title: "Profile", url: "/profile" },
      { title: "About", url: "/about" },
      { title: "Contact", url: "/contact" }
    ],
    linkSocial: [
      { title: "Twitter", url: "/" },
      { title: "Linkedin", url: "/" }
    ],
    isMenuShow: false
  },
  mutations: {
    closeMenu(state) {
      state.isMenuShow = false;
    },
    switchMenu(state) {
      state.isMenuShow = !state.isMenuShow;
    }
  },
  actions: {
    closeMenu({ commit }) {
      commit("closeMenu");
    },
    switchMenu({ commit }) {
      commit("switchMenu");
    }
  },
  getters: {
    linkMenu(state, getters) {
      if (getters.userID) {
        return state.linkMenuRegistered;
      } else {
        return state.linkMenu;
      }
    },
    linkSocial(state) {
      return state.linkSocial;
    },
    isMenuShow(state) {
      return state.isMenuShow;
    }
  }
};

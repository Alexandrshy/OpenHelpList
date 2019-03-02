export default {
  state: {
    locationLast: ""
  },
  mutations: {
    setLocation(state, meta) {
      state.locationLast = meta.fullPath;
    }
  },
  actions: {
    setLocation({ commit }, meta) {
      commit("setLocation", meta);
    }
  },
  getters: {
    getLocation(state) {
      return state.locationLast;
    }
  }
};

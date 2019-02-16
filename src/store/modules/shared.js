export default {
  state: {
    loading: false,
    btnLoadingStatus: "",
    status: "",
    message: ""
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setBtnLoadingStatus(state, payload) {
      state.btnLoadingStatus = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
    setError(state, payload) {
      console.log("payload", payload);
      state.status = payload.status;
      state.message = payload.message;
    },
    clearMessage(state) {
      state.message = "";
    }
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    setBtnLoadingStatus({ commit }, payload) {
      commit("setBtnLoadingStatus", payload);
    },
    setMessage({ commit }, payload) {
      commit("setMessage", payload);
    },
    setStatus({ commit }, payload) {
      commit("setStatus", payload);
    },
    setError({ commit }, payload) {
      commit("setError", payload);
    },
    clearMessage({ commit }) {
      commit("clearMessage");
    }
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    btnLoadingStatus(state) {
      return state.btnLoadingStatus;
    },
    status(state) {
      return state.status;
    },
    message(state) {
      return state.message;
    }
  }
};

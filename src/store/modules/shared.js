export default {
  state: {
    loading: false,
    btnLoadingStatus: "",
    status: "",
    message: "",
    title: ""
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setBtnLoadingStatus(state, payload) {
      state.btnLoadingStatus = payload;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
    setMessage(state, payload) {
      const { status, message, title } = payload;

      state.status = status;
      state.message = message;
      state.title = title;
    },
    clearMessage(state) {
      state.status = "";
      state.message = "";
      state.title = "";
    }
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    setBtnLoadingStatus({ commit }, payload) {
      commit("setBtnLoadingStatus", payload);
    },
    setStatus({ commit }, payload) {
      commit("setStatus", payload);
    },
    setMessage({ commit }, payload) {
      commit("setMessage", payload);
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
    },
    title(state) {
      return state.title;
    }
  }
};

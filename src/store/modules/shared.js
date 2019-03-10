export default {
  state: {
    loading: false,
    btnLoadingStatus: "",
    status: "",
    message: "",
    title: "",
    messageData: "",
    timerID: null
  },
  mutations: {
    setTimerID(state, payload) {
      state.timerID = payload;
    },
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
      const { status, message, title, messageData } = payload;

      state.status = status;
      state.message = message;
      state.title = title;
      state.title = title;
      state.messageData = messageData;
    },
    clearMessage(state) {
      state.status = "";
      state.message = "";
      state.title = "";
    }
  },
  actions: {
    setTimerID({ commit }, payload) {
      commit("setTimerID", payload);
    },
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
      commit("setTimerID", null);
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
    },
    messageData(state) {
      return state.messageData;
    },
    timer(state) {
      return state.timerID;
    }
  }
};

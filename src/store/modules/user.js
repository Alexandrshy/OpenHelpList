import * as fb from "firebase";

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export default {
  state: {
    user: ""
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async authUserUsingGoogle({ commit }) {
      commit("clearMessage");
      commit("setLoading", true);

      try {
        const user = new fb.auth.GoogleAuthProvider();
        user.addScope("email");
        await fb
          .auth()
          .signInWithPopup(user)
          .then(result => {
            console.log("result", result);
            commit(
              "setUser",
              new User(result.user.uid, result.user.displayName)
            );
            commit("setLoading", false);
          });
      } catch (error) {
        commit("setLoading", false);
        commit("setMessage", {
          status: "error",
          message: error.message
        });
      }
    },
    async authUserUsingGitHub({ commit }) {
      commit("clearMessage");
      commit("setLoading", true);

      try {
        const user = new fb.auth.GithubAuthProvider();
        user.addScope("email");
        await fb
          .auth()
          .signInWithPopup(user)
          .then(result => {
            console.log("result", result);
            commit("setUser", new User(result.user.uid));
            commit("setLoading", false);
          });
      } catch (error) {
        commit("setLoading", false);
        commit("setMessage", {
          status: "error",
          message:
            error.code === "auth/account-exists-with-different-credential"
              ? "You have signed up with a different provider for that email."
              : error.message
        });
      }
    },
    async authUserSingOut({ commit }) {
      try {
        await fb
          .auth()
          .signOut()
          .then(() => {
            commit("setUser", "");
          });
      } catch (error) {
        commit("setMessage", {
          status: "error",
          message: error.message
        });
      }
    },
    autoLogInUser({ commit }, payload) {
      commit("setUser", new User(payload.uid, payload.displayName));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.user !== null;
    }
  }
};

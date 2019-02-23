import store from "../store/";

export const loginRedirect = (to, from, next) => {
  if (store.getters.user.id) {
    next();
  } else {
    next("/login");
  }
};

export const profileRedirect = (to, from, next) => {
  if (!store.getters.user.id) {
    next();
  } else {
    next("/profile");
  }
};

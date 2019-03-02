import store from "../store/";

export const loginRedirect = (to, from, next) => {
  console.log("11.from", to);
  console.log("22.from", from);
  if (store.getters.user.id) {
    next();
  } else {
    next("/login");
  }
};

export const profileRedirect = (to, from, next) => {
  // console.log("11.from", to);
  // console.log("22.from", from);
  if (!store.getters.user.id) {
    next();
  } else {
    next("/profile");
  }
};

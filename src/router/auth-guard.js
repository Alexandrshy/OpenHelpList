import store from "../store/";

export default function(to, from, next) {
  console.log("store.getters.user", store.getters.user);
  if (store.getters.user.id) {
    next();
  } else {
    next("/login");
  }
}

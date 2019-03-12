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

export const editTaskRedirect = (to, from, next) => {
  const task = store.getters.tasks.find(task => task.id === to.params.id);

  if (task) {
    next();
  } else {
    next("/");
  }
};

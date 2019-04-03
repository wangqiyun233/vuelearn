export default {
  incrementByAct({ commit }) {
    setTimeout(() => {
      commit("increment");
    }, 1000);
  }
};

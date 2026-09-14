export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  // _ and _2 replaces the unused parameters 'state' and 'rootState' as convention (avoid compiling error).
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;    // it comes from this local getter file.
    const userId = rootGetters.userId;  // it comes from the global getter file in store/index.js.
    return coaches.some((coach) => coach.id === userId);
  },
};

export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);  //it pushes into the array in store/index.js
  },
};

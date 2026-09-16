import mutations from './mutations.js';
import actions from './actions.js';

export default {
  namespaced: true, //it indicates it won't be merge as a global state, but a separated one.
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions
};
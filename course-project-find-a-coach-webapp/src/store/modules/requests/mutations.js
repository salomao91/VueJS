export default {
  // it's called by store request/actions.js method
  addRequests(state, payload) {
    state.requests.push(payload);
  },
};
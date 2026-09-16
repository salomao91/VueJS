export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toDateString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequests', newRequest);   // it calls store request/mutations.js method
  },
};

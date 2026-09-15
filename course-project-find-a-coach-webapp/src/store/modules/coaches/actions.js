export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId, // store/index.js
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // context.commit is the indirect call to the mutation method (vuex invokes it).
    context.commit('registerCoach', coachData);
  },
};

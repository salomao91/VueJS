export default {
  registerCoach(context, data) {
    const coachData = {
      id: 'c3', // it'll get dynamic id later from the server.
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      rate: data.rate,
      areas: data.areas,
    };

    // context.commit is the indirect call to the mutation method (vuex invokes it).
    context.commit('registerCoach', coachData);
  },
};

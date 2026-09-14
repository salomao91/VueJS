<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);   // nameSpace/actionName, invokes store/modules/coaches/actions.cs method
      // this.$router.push('/coaches');
      this.$router.replace('/coaches');   // redirects to another page without letting user go back to the same form already sent.
    }
  }
};
</script>
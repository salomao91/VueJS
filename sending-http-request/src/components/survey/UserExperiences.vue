<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Add some servey results first.</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    getExperiences() {
      this.isLoading = true;
      fetch(
        'https://vue-http-request-9e50e-default-rtdb.firebaseio.com/surveys.json'
      )
        // remplaced "function()" to "=>" method to be able to refer to this.results.
        // .then(function (response) {
        .then( (response) => {
          if (response.ok) {
            return response.json();
          }
        })
        // .then(function (data) {
        .then( (data) => {
          this.isLoading = false;
          const dbResults = [];
          for (const id in data) {
            dbResults.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = dbResults;
        });
    },
  },
  mounted() {
    this.getExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
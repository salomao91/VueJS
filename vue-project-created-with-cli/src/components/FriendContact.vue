<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAdress }}</li>
    </ul>
  </li>
</template>

<script>
export default {

  // it receives data from parent component (App.vue)
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAdress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  // it indicates the name of the custom event, which sends data from this child => parent component (App.vue)
  emits: ['toggle-favorite'],

// detailed way
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing!');
  //       return false;
  //     }
  //   }
  // },

  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // it emits our own custom event to which we can listen from inside the parent component (App.vue in this case)
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

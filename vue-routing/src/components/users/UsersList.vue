<template>
<button @click="confirmInput">Confirm</button>
<button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList component beforeEach');
    console.log(to, from);
    next();
  },

  // it's called when user wants to leave a page (before the beforeEach and beforeEnter guard methods).
  // it's useful for when a user send a form data and it was not successfully saved, the page can warn him about it.
  beforeRouteLeave(to, from, next) {
    console.log('UsersList component beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure ? You got unsaved changes!');
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('UsersList unmounted')
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
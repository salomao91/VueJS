<template>
  <h2>App vue</h2>

  <user-data @add-user="addUserAppVue"></user-data>
  <active-user
  :userName="this.userNameAppVue"
  :userAge="this.userAgeAppVue"></active-user>
</template>

<script>
export default {
  data() {
    return {
      userNameAppVue: '',
      userAgeAppVue: ''
    }
  },
  methods: {
    addUserAppVue(userName, userAge) {
      this.userNameAppVue = userName;
      this.userAgeAppVue = userAge
    }
  }
};
</script>

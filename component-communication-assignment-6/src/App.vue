<template>
  <h2>App vue</h2>

  <user-data @add-user="addUserAppVue"></user-data>
  <active-user></active-user>
</template>

<script>
export default {
  date() {
    return {
      userNameAppVue: '',
      userAgeAppVue: ''
    }
  },
  methods: {
    addUserAppVue(userName, userAge) {
      this.userNameAppVue = userName,
      this.userAge = userAge
    }
  }
};
</script>

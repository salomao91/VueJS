<template>
  <h2>App vue</h2>

  <user-data @add-user="addUserAppVue"></user-data>
  <active-user
    v-for="user in users"
    :key="user.id"
    :id="user.id"
    :userName="user.userNameAppVue"
    :userAge="user.userAgeAppVue"
  ></active-user>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    addUserAppVue(userName, userAge) {
      const newUsers = {
        id: new Date().toISOString(),
        userNameAppVue: userName,
        userAgeAppVue: +userAge   // the + signal converts the value received as a String to a Number type
      };
      this.users.push(newUsers);
    },
  },
};
</script>

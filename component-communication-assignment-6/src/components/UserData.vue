<template>
  <form @submit.prevent="addUser">
    <div>
      <label>Name:</label>
      <input type="text" v-model="userName" />
    </div>
    <br />
    <div>
      <label>Age: </label>
      <input type="text" v-model="userAge" />
    </div>
    <button>Add User</button>
  </form>
</template>

<script>
export default {
    emits: ['add-user'],
  data() {
    return {
      userName: '',
      userAge: '',
    };
  },
  methods: {
    addUser() {
        this.$emit("add-user", this.userName, this.userAge);
    },
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

li,
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

input {
  font: inherit;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin-top: 1rem;
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  padding: 0.05rem 1rem;
}
</style>
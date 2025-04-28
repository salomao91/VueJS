<template>
  <div>
    <h2>Name: {{ userName }}</h2>
    <h3>Age: {{ userAge }}</h3>
  </div>
</template>

<script>
export default {
    props: {
        userName: {
            type: String,
            required: true
        },
        userAge: {
            type: Number,
            required: true
        }
    }
};

</script>

<style>

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

h2, h3 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
  text-align: center;
}

</style>
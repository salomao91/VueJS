<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "John Smith",
          phone: "123 456 5768",
          email: "john@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Roberts",
          phone: "321 123 4345",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
<template>
  <!-- prevent the browter to reload the page, instead it will handle it in my function -->
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
        enteredName: '',
        enteredPhone: '',
        enteredEmail: ''
    }
  },
  methods: {
    submitForm() {
      this.$emit("add-contact", this.enteredName, this.enteredPhone, this.enteredEmail);
    },
  },
};
</script>
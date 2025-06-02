<template>
     <h3>{{ counter }}</h3>
     <p>Favorite Value</p>
</template>

<script>
export default {
  computed: {
    counter() {
        return this.$store.getters.normalizedCounter;
    }
  },    
}
</script>
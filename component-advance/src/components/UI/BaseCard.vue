<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <h2>Default content</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    //if the component who use this slot as a template does not pass a content to it, it is undefined
    // then we can make some logic accessing its data.
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
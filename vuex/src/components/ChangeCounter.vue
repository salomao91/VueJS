<template>
    <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods: {
        addOne() {
            // never add the state inside a component, instead we only commit it to centralize the logic in the store.
            this.$store.commit('increment');
        }
    }
}
</script>
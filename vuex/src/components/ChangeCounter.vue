<template>
    <button @click="increment">Add 2</button>
    <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     // never add the state inside a component, instead we only commit it to centralize the logic in the store.
        //     this.$store.dispatch('increment');
        // }

        // it gives an object that merge into the methods properties object
        // actionNames as array parameter
        ...mapActions(['increment', 'increase'])

        // an altertive way by renaming its action names here
        // ... mapActions({
        //     inc: 'increment',
        //     increase: 'increase'
        // })
    }
}
</script>
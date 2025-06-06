<template>
     <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   computed: {
    // counter() {
    //     return this.$store.getters.finalCounter;
    //   }
    // },

    // it gives an object that merge into the computed properties object
    // getterNames as array parameter
    ...mapGetters(['finalCounter'])
    },
};
</script>
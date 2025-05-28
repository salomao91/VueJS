<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>
    <div>
        <input type="text" ref=userNameInput>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Solomon', 'Julie', 'Angela', 'Michael'],
        };
    },
    methods: {
        addUser() {
            const enteredUserName = this.$refs.userNameInput.value;
            this.users.unshift(enteredUserName);
        },
        removeUser(user) {
            this.users = this.users.filter(urs => urs !== user);
        }
     }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}
li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

/* add animation */
.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-active {
    transition: all 1s ease-out;     /* apply this to all properties that changes (opacity and transform in this case) */
}

.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}

/* remove animation */
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-active {
    /* apply this to all css properties that changes (opacity and transform in this case) */
    transition: all 1s ease-in;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

</style>
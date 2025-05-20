<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    getTeamMembers(teamId) {
      console.log(teamId);
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const membersId = selectedTeam.membersId;
      const selectedMembers = [];
      for (const memberId of membersId) {
        const selectedUser = this.users.find((user) => user.id === memberId);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // this component is accessed through router, then we have access to this.$route different properties.
     this.getTeamMembers(this.teamId);
     console.log(this.$route.query);
  },
  //by default vue cache the previous component data instead of destroy and re-create it,
  //so, created() is not called when using dynamic router.
  //but we can watch for changes in the $route, cause it always saves the latest data.
  watch: {
    teamId(newId) {
      this.getTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
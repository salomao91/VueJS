import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { path: '/teams', component: TeamList }, // my-domain.com/teams => TeamList
        { path: '/users', component: UserList },
        { path: '/teams/:teamId', component:TeamMembers, props: true },
        // props: true => it tells the vue router that the dynamic parameters should be passed into this component as props rather than just on the $route property.
        // teamId is passed as a prop into this component when it's loaded.
    ],
    // we can override the router-link-active default class name
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');

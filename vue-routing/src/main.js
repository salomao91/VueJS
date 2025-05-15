import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamList }, // my-domain.com/teams => TeamList
        { path: '/users', component: UserList },
    ],
    // we can override the router-link-active default class name
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');

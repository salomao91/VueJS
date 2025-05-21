import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams', 
            components: { default: TeamList, footer: TeamsFooter },    // my-domain.com/teams => TeamList
            children: [     // nested routes - useful feature to load different parts maybe nested in different components based on different URLs and paths.
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },    //  /teams/t1
            ]
        },
        { 
            path: '/users', 
            components: { default: UserList, footer: UsersFooter} 
        },
        // props: true => it tells the vue router that the dynamic parameters should be passed into this component as props rather than just on the $route property.
        // teamId is passed as a prop into this component when it's loaded.
        { path: '/:notFound(.*)', component: NotFound }
    ],
    // we can override the router-link-active default class name
    linkActiveClass: 'active',
    
    //it's called by the vue router whenever a page changes.
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {    //if user click to go to the previous page
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

const app = createApp(App);

app.use(router);

app.mount('#app');

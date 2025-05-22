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
            meta: { needsAuth: true },
            components: { default: TeamList, footer: TeamsFooter },    // my-domain.com/teams => TeamList
            children: [     // nested routes - useful feature to load different parts maybe nested in different components based on different URLs and paths.
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },    //  /teams/t1
            ]
        },
        { 
            path: '/users', 
            components: { 
                default: UserList, 
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('Users from main beforeEach');
                console.log(to, from);                
                next();
            }
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

//it's called by vue router whenever user navigate from one page to another, before each navigation.
router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
    }
    next();
    //it can be useful to allow or deny the next page navigation if the user is authenticated or not.
    // next(true);
    // next(false);
    // next('/users');
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({name: 'team-members', params: { teamId: 't2' } });
    // }
});

router.afterEach(function(to, from){
    // useful for logging each user navigation page or sending analytics data
    console.log('Global afterEach');
    console.log(to, from);    
})

const app = createApp(App);

app.use(router);

app.mount('#app');

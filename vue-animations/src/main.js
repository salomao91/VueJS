import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import App from './App.vue';
import AppAnimationJS from './AppAnimationJS.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoas from './pages/CourseGoals.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllUsers },
        { path: '/goals', component: CourseGoas }
    ]
});

// const app = createApp(App);
const app = createApp(AppAnimationJS);

app.component('base-modal', BaseModal);

app.use(router);

app.mount('#app');

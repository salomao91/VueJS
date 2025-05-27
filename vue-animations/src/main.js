import { createApp } from 'vue';

// import App from './App.vue';
import AppAnimationJS from './AppAnimationJS.vue';
import BaseModal from './components/BaseModal.vue';

// const app = createApp(App);
const app = createApp(AppAnimationJS);

app.component('base-modal', BaseModal);

app.mount('#app');

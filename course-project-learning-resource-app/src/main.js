import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/IU/BaseCard.vue';
import BaseButton from './components/IU/BaseButton.vue';
import BaseDialog from './components/IU/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
import './permission';

createApp(App).use(router).use(piniaStore).mount('#app');

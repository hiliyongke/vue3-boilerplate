import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
import './permission';
import api from './api/index';

const app = createApp(App);
app.config.globalProperties.$api = api;
app.use(router).use(piniaStore).mount('#app');

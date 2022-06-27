import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
import './index.css';
import './permission';

// 支持SVG vite-plugin-svg-icons
import 'virtual:svg-icons-register';
createApp(App).use(router).use(piniaStore).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
import './index.css';
//改为TDesign默认UI
import TDesign from 'tdesign-vue-next';
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import './permission';

// 支持SVG
import 'virtual:svg-icons-register';
createApp(App).use(router).use(TDesign).use(piniaStore).mount('#app');

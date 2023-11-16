import './assets/main.css';

import { createApp } from 'vue';

import api from '@/api/api';
import App from './App.vue';

createApp(App).mount('#app');

api.get('/categories').then(() => {
});

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'; //引入bootstrap依赖
import 'bootstrap/dist/js/bootstrap';

createApp(App).use(store).use(router).mount('#app')

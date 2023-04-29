import { createApp } from 'vue';
import { router } from './router';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import App from './App.vue';
import AppLoader from './components/AppLoader.vue';

const app = createApp(App);
app.use(router);
app.component('AppLoader', AppLoader);
app.mount('#app');

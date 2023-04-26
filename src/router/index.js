import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import DetailProjectPage from '../pages/DetailProjectPage.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: HomePage,
},
{
path: '/detail',
name: 'detail',
component: DetailProjectPage,
},
]
});
export { router };
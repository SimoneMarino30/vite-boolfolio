import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import DetailProjectPage from '../pages/DetailProjectPage.vue';

const router = createRouter({
history: createWebHistory(),
linkActiveClass: 'active',
linkExactActiveClass: '',
routes: [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
  //  ! QUANDO PASSO IL PARAMETRO :ID IN INDEX.JS SI ROMPE TUTTO 
    // path: '/detail/:id',
    path: '/detail/',
    name: 'detail',
    component: DetailProjectPage,
  },
],
});
export { router };
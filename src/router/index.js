import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import DetailProjectPage from '../pages/DetailProjectPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

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
    path: '/projects/:id',
    name: 'detail',
    component: DetailProjectPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
],
});
export { router };
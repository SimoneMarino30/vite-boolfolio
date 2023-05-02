import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
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
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
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
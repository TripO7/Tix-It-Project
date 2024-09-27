import {createRouter, createWebHistory} from 'vue-router';

import store from '../store.js';

import routes from './routes.js';

const router = createRouter({
  history :createWebHistory(),
  routes,

});

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' || to.name === 'createTicket') {
    // These routes require the user to be logged in.
    if (store.getters.isLoggedIn) {
      // User is signed in.
      next();
    } else {
      // User is not signed in so redirect them to login page.
      next({ name: 'Login' });
    }
  } else {
    // For all other routes, just go to the page requested
    next();
  }
});

export default router;
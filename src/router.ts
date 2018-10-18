import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Preview from './views/Preview.vue';
import Solution from './views/Solution.vue';
import Bonus from './views/Bonus.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution,
    },
    {
      path: '/bonus',
      name: 'bonus',
      component: Bonus,
    },
  ],
});

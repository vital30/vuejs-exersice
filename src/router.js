import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './home/HomePage.vue';
import SecondGrid from './grids/SecondGrid.vue';
import FirstGrid from './grids/FirstGrid.vue';
import ComplexGrid from './grids/ComplexGrid.vue';
import FlexGrid from './grids/FlexGrid.vue';
import SimpleGrid from './grids/SimpleGrid.vue';
import StaticGrid from './grids/StaticGrid.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
        path: '/FirstGrid',
        name: 'FirstGrid',
        component: FirstGrid,
    },
    {
        path: '/SecondGrid',
        name: 'SecondGrid',
        component: SecondGrid,
    },
    {
        path: '/ComplexGrid',
        name: 'ComplexGrid',
        component: ComplexGrid,
    },
    {
        path: '/FlexGrid',
        name: 'FlexGrid',
        component: FlexGrid,
    },
    {
        path: '/SimpleGrid',
        name: 'SimpleGrid',
        component: SimpleGrid,
    },
    {
        path: '/StaticGrid',
        name: 'StaticGrid',
        component: StaticGrid,
    },

  ],

});

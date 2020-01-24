import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Index from '../components/Index.vue';
import AddItem from '../components/AddItem.vue';
import EditItem from '../components/EditItem.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add-item',
    name: 'AddItem',
    component: AddItem
  },
  {
    path: '/edit-item/:id',
    name: 'EditItem',
    component: EditItem
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

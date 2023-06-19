import {createRouter, createWebHashHistory} from "vue-router";
import Index from '../views/megaBoss1.vue'
import Login from '../views/login.vue'

const routes = [

  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
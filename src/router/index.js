import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import ArchiveView from '../views/ArchiveView.vue'
import AlboView from '../views/AlboView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/archive',
    name: 'archive',
    component: ArchiveView
  },
  {
    path: '/albo',
    name: 'albo',
    component: AlboView
  }
]

const router = new VueRouter({
  routes
})

export default router

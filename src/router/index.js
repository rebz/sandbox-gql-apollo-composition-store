import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'characters.index',
    component: Home
  },
  {
    path: '/character/:id',
    name: 'character.view',
    component: () => import(/* webpackChunkName: "page-character-view" */ '../views/CharacterViewPage.vue')
  },
  {
    path: '/character/:id/edit',
    name: 'character.edit',
    component: () => import(/* webpackChunkName: "page-character-edit" */ '../views/CharacterEditPage.vue')
  },
  {
    path: '/multi-form',
    name: 'multi.form',
    component: () => import(/* webpackChunkName: "page-multi-form" */ '../views/MultiFormPage.vue')
  },
  {
    path: '/snow',
    name: 'snow',
    component: () => import(/* webpackChunkName: "page-snow" */ '../views/SnowPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

export default router

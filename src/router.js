import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import PatreonPage from './components/PatreonPage.vue'
import AdminPage from './components/AdminPage.vue'
import BlogPage from './components/BlogPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path:'/admin',
      name:'adminPage',
      component: AdminPage
    },
    {
      path:'/patreon',
      name: 'patreonPage',
      component: PatreonPage
    },
    {
      path: '/blog',
      name: 'blogPage',
      component: BlogPage
    }
  ]
})
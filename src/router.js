import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import StorePage from './components/StorePage.vue'
import AdminPage from './components/AdminPage.vue'
import BlogPage from './components/BlogPage.vue'
import BlogPost from './components/BlogPost.vue'

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
      path:'/store',
      name: 'storePage',
      component: StorePage
    },
    {
      path: '/blog',
      name: 'blogPage',
      component: BlogPage
    },
    {
      path: '/blog/:slug',
      name: 'blogPost',
      component: BlogPost
    }
  ]
})
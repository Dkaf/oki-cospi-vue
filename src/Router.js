import VueRouter from "vue-router";
import App from './App'

const routes = [
  {path: '/', component: App},
  {path:'/admin', component: AdminPage},
  {path:'/patreon', component: PatreonPage}
]

const router = new VueRouter({
  routes
})

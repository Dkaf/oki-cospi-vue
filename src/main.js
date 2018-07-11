import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'

import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store/index'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

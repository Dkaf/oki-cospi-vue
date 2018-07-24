import Vue from 'vue'
import App from './App.vue'

//Vue Router
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store/index'

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faArrowCircleLeft, faPlus, faMinus, faTimes, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartPlus, faShoppingCart, faArrowCircleLeft, faPlus, faMinus, faTimes)

//Animate CSS
import AOS from 'aos'
import 'aos/dist/aos.css'

	
import PrismicVue from 'prismic-vue';
import linkResolver from './link-resolver';
	
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

Vue.component('font-awesome-icon', FontAwesomeIcon)

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

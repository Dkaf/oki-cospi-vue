import Vue from 'vue'
import Vuex from 'vuex'

//Module imports
import shop from './modules/shop'
import blog from './modules/blog'
import gallery from './modules/gallery'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    blog,
    gallery
  }
})

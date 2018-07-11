import { Moltin } from '@/moltin'
import { shopMutations } from '../mutation-types'
import router from '@/router'

const state = {
  products: []
}

const getters = {
  //Search state for product by slug
  viewProduct: (state, getters, rootState) => {
    const slug = rootState.route.params.slug
    return slug ? state.products.find(product => product.slug === slug) : {}
  }
}

const actions = {
  //Get all products and corresponding images from cms
  getAllProducts({ commit }) {
    Moltin.Products.With('main_image').All().then(res => {
      commit(shopMutations.SET_PRODUCTS, {products: res.data, images: res.included.main_images})
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const mutations = {
  [shopMutations.SET_PRODUCTS](state, {products, images}) {
    //Trim products down to only relevent info
    state.products = products.map((product,i) => {
      return {
        name: product.name,
        price: product.meta.display_price.without_tax.formatted,
        quantity: product.meta.stock.level,
        slug: product.slug,
        image: images[i].link.href,
        id: product.id
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
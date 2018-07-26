import { Moltin } from '@/moltin'
import { shopMutations } from '../mutation-types'

const state = {
  products: [],
  cart: {},
  notification: ''
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
      throw new Error(err.message)
    })
  },
  getCart({ commit, state }) {
    Moltin.Cart(state.cart.id).Items()
    .then(res => {
      commit(shopMutations.UPDATE_CART, res)
    })
  },
  addToCart({ commit, state, dispatch }, {id, amount}) {
    if(state.cart === {}) {
      const cart = Moltin.Cart()
      commit(shopMutations.CREATE_CART, cart)
    }
    Moltin.Cart(state.cart.id).AddProduct(id, amount).then(() => {
      return dispatch('getCart')
    })
    .catch(err => {
      throw new Error(err.message)
    })
  },
  removeFromCart({ commit, state, dispatch }, {id, amount}) {
    Moltin.Cart(state.cart.id).RemoveItem(id, amount).then(() => {
      return dispatch('getCart')
    })
  },
  deleteCart({ commit, state }) {
    Moltin.Cart(state.cart.id).Delete()
    .then(res => {
      console.log(res)
      commit(shopMutations.DELETE_CART)
    })
  }
}

const mutations = {
  [shopMutations.SET_PRODUCTS](state, {products, images}) {
    //Trim products down to only relevent info
    state.products = products.map((product,i) => {
      return {
        name: product.name,
        description: product.description,
        price: product.meta.display_price.without_tax.formatted,
        quantity: product.meta.stock.level,
        slug: product.slug,
        image: images[i] ? images[i].link.href : '#',
        id: product.id
      }
    })
  },
  [shopMutations.CREATE_CART](state, cart) {
    state.cart = cart
  },
  [shopMutations.UPDATE_CART](state, items) {
    state.cart.items = items
  },
  [shopMutations.DELETE_CART](state) {
    state.notification = "Cart deleted"
    state.cart = {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
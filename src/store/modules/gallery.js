import { butter } from '@/buttercms'
import { galleryMutations } from '../mutation-types'


const state = {
  galleryImages: []
}

const actions = {
  getPage({ commit }) {
    butter.page.retrieve('*', 'image-gallery')
    .then(res => {
      commit(galleryMutations.SET_GALLERY, res.data.data)
    })
    .catch(err => {
      throw new Error(err.message)
    })
  }
}

const mutations = {
  [galleryMutations.SET_GALLERY](state, content) {
    state.galleryImages = content.fields.gallery_images
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
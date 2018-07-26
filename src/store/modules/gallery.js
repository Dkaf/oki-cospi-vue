import { galleryMutations } from '../mutation-types'


const state = {
  galleryImages: []
}

const actions = {
  getPage({ commit }) {
    this.$prismic.client.query(
      this.$prismic.Predicates.at('document.type', 'gallery_item')
    ).then((response) => {
      // response is the response object, response.results holds the documents
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
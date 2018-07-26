import { blogMutations } from '../mutation-types'


const state = {
  posts: [],
  selectedPost: null
}

const getters = {
  trimmedPosts: state => {
    return state.posts.map(post => {
      if(post.summary.length > 100) {
        return {...post, summary: post.summary.substring(0, 97) + "..."}
      } else {
        return {...post, summary: post.summary}
      }
    })
  }
}

const actions = {
  getAllPosts({ commit }) {

  },
  getPost({ commit }, slug) {

  }
}

const mutations = {
  [blogMutations.SET_POSTS](state, posts) {

    state.posts = posts
  },
  [blogMutations.SET_SELECTED_POST](state, post) {
    state.selectedPost = post
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
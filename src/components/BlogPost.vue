<template>
  <div class="blog-post">
    <font-awesome-icon icon="arrow-circle-left" class="back-arrow" @click="goBack"/>
    <div class="author-info">
      <img class="profile-img" :src="post.data.author.profile_image"/>
      <h4 class="author">{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <span class="bio">{{ post.data.author.bio }}</span>
      <span class="date">{{ new Date(post.data.published).toDateString() }}</span>
    </div>
    <h1 class="title">{{ post.data.title }}</h1>
    <div class="body" v-html="post.data.body"></div>

    <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="button">
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button">
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { butter } from '@/buttercms'

export default {
  name: 'BlogPost',
  computed: mapState({
    post: state => state.blog.selectedPost
  }),
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.$store.dispatch('blog/getPost', this.$route.params.slug)
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    this.$store.dispatch('blog/getPost', this.$route.params.slug)
  }
}
</script>

<style lang="stylus" scoped>
  .blog-post
    display: flex
    flex-flow: column
    align-items: center
    .author-info
      display: grid
      grid: 1fr 1fr 1fr / 1fr 1fr
      font-size: 1.25em
      text-align: left
      align-items: center
      .profile-img
        grid-row: 1 / span 3
        justify-self: center
      .author
        grid-area: 1 / 2
        margin: 0
      .bio
        grid-area: 2 / 2
      .date
        grid-area: 3 / 2
      .author
      .bio
      .date
        opacity: .8
        font-size: 1em
    .title
      font-size: 6em
    .body
      font-size: 2em
      line-height: 1.58
      letter-spacing: -.003em
      text-align: left
      width: 50%
      margin: 0 auto
      padding: 25px
</style>


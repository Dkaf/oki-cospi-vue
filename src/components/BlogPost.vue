<template>
  <div class="blog-post">
    <h1 class="title">{{ post.data.title }}</h1>
    <h4 class="author">{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
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
import { butter } from '@/buttercms'

export default {
  name: 'ButterPost',
  data() {
    return {
      post: {}
    }
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
      .then(res => {
        console.log(res.data)
        this.post = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.getPost()
    }
  },
  created() {
    this.getPost();
  }
}
</script>

<style lang="stylus" scoped>
  .blog-post

    .title
      font-size: 10em
    .body
      font-size: 2em
      line-height: 1.58
      letter-spacing: -.003em
      width: 50%
      margin: 0 auto
      padding: 25px
</style>


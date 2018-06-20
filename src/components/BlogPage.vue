<template>
  <div class="blog-page">
    <h1 class="header main-header">A Very Oki Blog</h1>
    <div class="post-container">
      <div class="post" v-for="(post,index) in posts" :key="post.slug + '_' + index">
        <!-- insert post preview component -->
        <post-preview :slug="post.slug" :title="post.title" :summary="truncateStr(post.summary)" :image="post.featured_image" />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from './PostPreview'
import { butter } from '@/buttercms'

export default {
  name: 'BlogPage',
  components: { PostPreview },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        console.log(res.data)
        this.posts = res.data.data
      })
    },
    truncateStr(str, length=100, ending='...') {
      if(str.length > length) {
        return str.substring(0, length - ending.length) + ending
      } else {
        return str
      }
    }
  },
  created() {
    this.getPosts();
  }
}
</script>

<style lang="stylus" scoped>
  @css {
    .blog-page {
      grid:
        [row1-start] "header" [row1-end]
        [row2-start] " body " [row2-end]
    }
  }
  .blog-page
    display: grid
    grid-gap: 15px
  .main-header
    font-size: 5em
    padding: 25px
    grid-area: header
    place-self: center
  .post-container
    grid-area: body
    display: flex
    flex-flow: column
    padding: 25px
    .post
      padding: 10px
      display: flex
      justify-content: center
  @media screen and (min-width: 700px)
    .post-container
      flex-flow: row wrap
    @css {
      .blog-page {
        grid:
          [row1-start] "header header header" 1fr [row1-end]
          [row2-start] " ....   body   .... " 2fr [row2-end]
          / 10% auto 10%
      }
    }
</style>


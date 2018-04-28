<template>
  <div class="blog-page">
    <div v-for="post in posts" v-bind:key="post.id">
      <blog-post
        :title="post.title"
        :date="post.date"
        :thumbnail="post.thumbnail"
        :body="post.body"
      />
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost'
import client from './../contentfulClient.js'

export default {
  name: 'BlogPage',
  components: { BlogPost },
  data: function() {
    return {
      posts: []
    }
  },
  created: function() {
    client.getEntries({'content_type': 'blogPost'})
    .then(res => {
      this.posts = res.items
    }).catch(err => console.log(err))
  }
}
</script>

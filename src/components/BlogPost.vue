<template>
  <div class="blog-post">
    <h2 class="title">{{title}}</h2>
    <span class="date">{{date}}</span>
    <img :src="thumbnail" />
    <p class="body">{{body}}</p>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: [
    'title',
    'date',
    'body',
    'thumbnail'
  ]
}
</script>

<template>
  <div class="container gallery-item">
    <img class="gallery-img" @hover="imgHover" v-bind:style="{ background: overlay }" :src="src" :alt="alt" />
    <!-- <img class="gallery-img" :src="src" :alt="alt" /> -->
  </div>
</template>

<script>
  export default {
    name: "GalleryItem",
    props: [
      'src',
      'alt',
      'imgHover',
      'overlay'
      ]
  }
</script>

<style lang="stylus" scoped>
  .gallery-item
    margin: 0
    padding: 10px
  .gallery-img
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    transition: all 0.3s cubic-bezier(.25,.8,.25,1)
    &:hover
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  @media screen and (min-width: 700px)
    .gallery-img 
      height: 500px
      width: 500px
      object-fit: cover
</style>
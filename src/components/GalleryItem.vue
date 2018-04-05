<template>
  <div class="container gallery-item">
      <img :src="src" :alt="alt"/>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: ['src', 'alt']
}
</script>

<style lang="stylus" scoped>
  .gallery-item
    margin: 0
    img
      max-width: 300px
      max-height: auto
</style>


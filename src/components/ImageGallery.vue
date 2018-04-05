<template>
  <div class="container image-gallery">
    <span class="header-text">Gallery</span>
    <div v-for="photo in photos" v-bind:key="photo.id">
        <gallery-item :src="photo.url" :alt="photo.alt" />
    </div>
  </div>
</template>

<script>
import GalleryItem from './GalleryItem';

export default {
  name: 'ImageGallery',
  components: {GalleryItem},
  props: ['photos']
}
</script>

<style lang="stylus" scoped>
  .image-gallery
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: minmax(100px, auto)
    grid-gap: 10px
    grid-column: 2
    span
      font-size: 8em
      grid-column: span 3
      margin-bottom: 50px
</style>



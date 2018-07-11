<template>
  <div class="container image-gallery">
    <h1 data-aos="fade-right" class="header-text">Gallery</h1>
      <gallery-item v-for="(image,i) in images" :key="i" :src="image.image" alt="gallery image" />
  </div>
</template>

<script>
import GalleryItem from './GalleryItem'
import { mapState } from 'vuex';

export default {
  name: 'ImageGallery',
  components: {GalleryItem},
  props: ['photos'],
  computed: mapState({
      images: state => state.gallery.galleryImages
  }),
  created() {
    this.$store.dispatch('gallery/getPage')
  }
}
</script>

<style lang="stylus" scoped>
  .image-gallery
    display: flex
    flex-flow: row wrap
    grid-area: gallery
    justify-content: center
  .header-text
    flex-basis: 100%
</style>



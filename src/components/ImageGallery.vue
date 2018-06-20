<template>
  <div class="container image-gallery">
    <h1 data-aos="fade-right" class="header-text">Gallery</h1>
      <gallery-item v-for="(image,i) in page.fields.gallery_images" :key="i" :src="image.image" alt="gallery image" />
  </div>
</template>

<script>
import GalleryItem from './GalleryItem'
import { butter } from '@/buttercms.js'

export default {
  name: 'ImageGallery',
  components: {GalleryItem},
  props: ['photos'],
  data: function() {
    return {
      page: {
        fields: {}
      }
    }
  },
  methods: {
    getPage() {
      butter.page.retrieve('*', 'image-gallery')
      .then(res => {
        this.page = res.data.data
      })
      .else(err => {
        console.log(err)
      })
    }
  },
  created: function() {
    this.getPage()
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



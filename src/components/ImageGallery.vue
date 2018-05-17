<template>
  <div class="container image-gallery">
    <span data-aos="fade-right" class="header-text">Gallery</span>
    <div v-for="photo in galleryImages" v-bind:key="photo.sys.id">
        <gallery-item :src="photo.fields.image.fields.file.url" :alt="photo.fields.costume" />
    </div>
  </div>
</template>

<script>
import GalleryItem from './GalleryItem';
import client from './../contentfulClient.js'

export default {
  name: 'ImageGallery',
  components: {GalleryItem},
  props: ['photos'],
  data: function() {
    return {
      galleryImages: []
    }
  },
  created: function() {
    client.getEntries({'content_type':'galleryImage'})
    .then((res)=> {
      this.galleryImages = res.items
    }).catch((err) => console.log(err))
  }
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



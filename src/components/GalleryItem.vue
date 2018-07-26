<template>
  <div class="container gallery-item">
    <transition name="zoom">
      <img class="gallery-img" :style="{ background: overlay }" :src="src" :alt="alt" @click="toggleActive" :active="isActive" />
    </transition>
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
    ],
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      toggleActive: () => {
        return this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallery-item
    margin: 0
    padding: 10px
  .gallery-img
    cursor: pointer
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    filter: brightness(90%)
    transition: all 0.3s cubic-bezier(.25,.8,.25,1)
    &:hover
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
      filter: brightness(100%)
  .zoom-enter-active
    transition: all 0.3s ease
    transform: translateScale(1.5)
  @media screen and (min-width: 700px)
    .gallery-img 
      height: 500px
      width: 500px
      object-fit: cover
</style>
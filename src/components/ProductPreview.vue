<template>
  <div class="product-preview">
    <div class="product-container">
      <router-link class="product-link" :to="'/store/' + slug">
        <div class="img-container">     
          <img class="product-img" :src="src" :alt="alt" />
          <div class="image-filter">
            <span class="info product-name">{{ name }}</span>
            <div class="info product-price">{{ price }}</div>
          </div>
        </div>
        <div class="product-info">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPreview',
  props:[
    'src',
    'alt',
    'name',
    'price',
    'slug'
  ]
}
</script>

<style lang="stylus" scoped>
  imgSize = 450px

  .product-preview
    display: flex
    flex-flow: column
    justify-content: space-evenly
  .product-container
    padding: 25px
  .img-container
    position: relative
    height: imgSize
    width: imgSize
  .image-filter
    overflow: hidden
    bottom: 100%
    left: 0
    right: 0
    background-color: rgba(0,0,0,0.75)
    width: 100%
    height:0
    transition: .5s ease
    position: absolute
  .product-img
    height: imgSize
    width: imgSize
    object-fit: cover
  .info
    color: white
    font-size: 2rem
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    text-align: center
    margin: 10px
    font-family: 'Coves Bold'
  .product-link:hover .image-filter
    bottom: 0
    height: 100%
  .product-name
    top: 40%
    font-size: 1.5em
</style>

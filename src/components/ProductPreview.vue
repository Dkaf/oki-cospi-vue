<template>
  <div class="product-preview">
    <router-link :to="'/store/' + slug">
      <img class="product-img" :src="src" :alt="alt" />
      <div class="product-info">
        <span class="product-name">{{ name }}</span>
        <span class="price">{{ price }}</span>
      </div>
    </router-link>
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
  .product-img
    height: imgSize
    width: imgSize
    object-fit: cover
  .product-name
    font-size: 1.5em
</style>

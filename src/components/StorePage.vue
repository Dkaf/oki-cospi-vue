<template>
  <div class="container store-page">
    <div class="products">
      <product-preview
        v-for="(product, i) in products" :key="'product.slug' + '_' + i"
        :slug="product.slug"
        :src="product.image"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductPreview from './ProductPreview'

export default {
  name: 'StorePage',
  components: {ProductPreview},
  computed: mapState({
      products: state => state.shop.products
  }),
  created() {
    this.$store.dispatch('shop/getAllProducts')
  }
}
</script>

<style lang="stylus" scoped>
  .store-page
    display: grid
  .main-header
    font-size: 5em
    grid-area: header
  .products
    grid-area: body
    display: grid
    grid-template-columns: 1fr 1fr 1fr
  @media screen and (min-width: 700px) {
    @css {
      .store-page {
        grid:
          [row1-start] "header header header" 200px [row1-end]
          [row2-start] " ....   body   .... " 1fr [row2-end]
          / 10% auto 10%
      }
    }
  }
</style>



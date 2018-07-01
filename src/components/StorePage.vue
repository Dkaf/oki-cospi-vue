<template>
  <div class="container store-page">
    <h1 class="main-header">Store</h1>
    <div class="products" v-for="(product, i) in products" :key="'product.slug' + '_' + i">
      <product-preview
        :slug="product.slug"
        :src="images[i].link.href"
        :name="product.name"
        :price="product.meta.display_price.without_tax.formatted"
      />
    </div>
  </div>
</template>

<script>
import { Moltin } from '@/moltin'
import ProductPreview from './ProductPreview'

export default {
  name: 'StorePage',
  components: {ProductPreview},
  data() {
    return {
      products: [],
      images: []
    }
  },
  methods: {
    getProducts() {
      Moltin.Products.With('main_image').All().then(res => {
        console.log(res)
        this.products = res.data;
        this.images = res.included.main_images
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getProducts()
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



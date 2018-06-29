<template>
  <div class="container store-page">
    <h1 class="main-header">Store</h1>
    <div class="products" v-for="(product, i) in products" :key="'product.slug' + '_' + i">
      <product-preview :slug="product.slug" :src="images[i].link.href" :name="product.name" />
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
  .main-header
    font-size: 5em
</style>



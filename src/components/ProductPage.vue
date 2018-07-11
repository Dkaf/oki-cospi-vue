<template>
  <div class="product-page">
    <h2 class="product-name">{{ selectedProduct.name }}</h2>
    <img class="product-img" :src="selectedProduct.image">
    <span class="price">{{ selectedProduct.price}}</span>
    <!-- purchase button -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductPage',
  computed: {
    ...mapGetters('shop',{
      selectedProduct: 'viewProduct'
    })
  }
}
</script>


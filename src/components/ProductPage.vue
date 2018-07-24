<template>
  <div class="product-page">
    <font-awesome-icon icon="arrow-circle-left" class="back-arrow" @click="goBack"/>
    <img class="product-img" :src="selectedProduct.image">
    <div class="product-info">  
      <h2 class="product-name">{{ selectedProduct.name }}</h2>
      <span class="price">{{ selectedProduct.price }}</span>
      <h3 class="product-description">{{ selectedProduct.description }}</h3>
      <span class="stock">{{ checkStock(selectedProduct.quantity) }}</span>
    </div>
    <!-- purchase button -->
    <div class="purchase-info">
      <label class="quantity-label" for="quantity">Quantity</label>
      <select id="quantity" class="quantity" v-model.number="val">
        <option v-for="n in selectedProduct.quantity" :key="n">{{ n }}</option>
      </select>
      <font-awesome-icon icon="cart-plus" class="cart-add" @click="addToCart(selectedProduct.id, val)" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Moltin } from '@/moltin'

export default {
  name: 'ProductPage',
  data() {
    return {
      val: 1
    }
  },
  computed: {
    ...mapGetters('shop',{
      selectedProduct: 'viewProduct'
    })
  },
  methods: {
    checkStock(stock) {
      return stock > 0 ? 'In stock' : 'Out of stock'
    },
    addToCart(id, amount) {
      const itemInfo = {id, amount}
      this.$store.dispatch('shop/addToCart', itemInfo)
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    if(!this.selectedProduct) {
      this.$store.dispatch('shop/getAllProducts')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @css {
    .product-page {
      font-size: 1.5rem;
      display: grid;
      grid:
        [row1-start] " back  image info  .... " 1fr [row1-end]
        [row2-start] " ....  image  buy  ....  " 1fr [row2-end]
        / 1fr 1fr 1fr 1fr;
      grid-gap: 15px;
    }
  }
  @media screen and (min-width: 700px)
    .product-img
      grid-area: image
      place-self: center
      height: 700px
      width: auto
    .product-info
      grid-area: info
      display: flex
      flex-flow: column
      justify-content: space-around 
      place-self: start
      height: 220px
    .purchase-info
      grid-area: buy
      place-self: start
      display: flex
      justify-content: center
      align-items: center
    .cart-add
      cursor: pointer
      padding: 25px
    .quantity-label
      padding: 25px
    .quantity
      height: 40px
      width: 40px
      text-align: center
      font-size: 1.25rem
      font-family: "Coves Bold"
    .back-arrow
      grid-area: back
      cursor: pointer
      
</style>



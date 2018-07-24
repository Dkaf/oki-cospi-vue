<template>
  <div class="cart-page">
    <div class="cart-contents">
      <!-- <cart-item v-for="item in items" 
        :key="item.id"
        :img="item.image.href"
        :name="item.name"
        :quantity="item.quantity"
        :id="item.id"
        :price="item.meta.display_price.without_tax.value.formatted"
        :description="item.description"
      /> -->
    </div>
    <router-link to="/store/checkout">
      <button>Checkout</button>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartItem from './CartItem'

export default {
  name: 'CartPage',
  components: { CartItem },
  computed: mapState({
    cart: state => state.shop.cart.items
  })
}
</script>


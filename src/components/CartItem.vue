<template>
  <div class="cart-item">
    <router-link :to="'/store/' + slug">
      <img class="thumbnail" :src="img" :alt="alt" />
      <div class="details">
        <span class="name">{{ name }}</span>
        <span class="description">{{ description }}</span>
        <span class="quantity">{{ quantity.toString() }}</span>
      </div>
    </router-link>
    <font-awesome-icon icon="times" class="remove-icon" @click="removeItem(id, quantity)" />
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    img: String,
    alt: String,
    name: String,
    description: String,
    quantity: Number,
    id: String,
    slug: String,
    price: String
  },
  methods: {
    removeItem(id, quantity) {
      this.$store.dispatch('shop/removeFromCart', {id, quantity})
    }
  }
}
</script>


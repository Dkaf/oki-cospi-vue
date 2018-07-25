<template>
  <div class="checkout-page">
    <payment-form />
  </div>  
</template>

<script>
import PaymentForm from './PaymentForm'

export default {
  name:'CheckoutPage',
  components: { PaymentForm }
}
</script>

<style lang="stylus" scoped>
  .checkout-page
    display: flex
    flex-flow: column
    align-items: center
    justify-content: center
</style>




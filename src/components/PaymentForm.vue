<template>
  <div class="payment-form">
    <h3 class="section-title">Shipping and Billing Information</h3>
    <div class="section shipping">
      <div class="field">
        <label for="email">Name</label>
        <input id="name" type="text" placeholder="yourname@example.com"/>
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="yourname@example.com"/>
      </div>
      <div class="field">
        <label for="address">Address</label>
        <input id="address" type="text" placeholder="1234 Example St"/>
      </div>
      <div class="field">
        <label for="city">City</label>
        <input id="city" type="text" placeholder="Chicago"/>
      </div>
      <div class="field">
        <label for="state">State</label>
        <input id="state" type="text" placeholder="CA"/>
      </div>
      <div class="field">
        <label for="postal-code">Postal Code</label>
        <input id="postal-code" type="text" placeholder="yourname@example.com"/>
      </div>
    </div>
    <h3 class="section-title">Payment Information</h3>
    <div class="section payment">
      <div class="field">
        <label for="stripe-card">Credit or debit card</label>
        <card class='stripe-card'
          :class='{ complete }'
          stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
          :options='stripeOptions'
          @change='complete = $event.complete'
        />
      </div>
    </div>
    <a class='pay-with-stripe' @click='pay' :disabled='!complete'>Pay</a>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  name: 'PaymentForm',
  components: { Card },
  data() {
    return {
      complete: false,
      stripeOptions: {

      }
    }
  },
  methods: {
    pay() {
      createToken().then(res => console.log(res.token))
    }
  }
}
</script>

<style lang="stylus" scoped>
  .payment-form
    display: flex
    flex-flow: column
    height: auto
    width: 300px
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    justify-content: space-around
    border-radius: 5px
    padding: 20px
  .section-title
    text-transform: uppercase
    font-size: 1rem
  .field
    display: flex
    flex-flow: column
    text-align: left
    padding: 10px
  // input
  //   &:focus
  //     border-color: #ff7878
  .stripe-card
    border: 1px solid grey
  .stripe-card.complete
    border-color: green
  .pay-with-stripe
    border 2px solid #ff7878
    width: 100px
    border-radius: 5px
    align-self: center
    font-family: 'Coves Bold'
    font-size: 1.3rem
    padding: 10px
    cursor: pointer
    transition: all ease .2s
    &:hover
      background: #ff7878
</style>


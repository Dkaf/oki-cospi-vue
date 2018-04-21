<template>
  <div class="container home-page">
      <img id="logo" :class="{tada: isAnimated}" class="animated" src="./../assets/Sticker.png" />
    <span class="header-text">
      Oki Cospi
    </span>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: function() {
    return {
      isAnimated: false
    }
  },
  methods: {
    triggerAnimate() {
      return this.isAnimated = !this.isAnimated
    }
  },
  created() {
    setInterval(this.triggerAnimate, 3000)
  }
}
</script>

<style lang="stylus" scoped>
  .home-page
    background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url('./../assets/boat-girl.jpg')
    background-size: cover
    grid-column-end: span 3
    height: 100vh
    img
      height: 200px
      width: auto
      position: absolute
      top: 0
      left: 0
      padding: 25px
    span
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      font-size: 10em
      color: white  
</style>



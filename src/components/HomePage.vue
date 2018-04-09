<template>
  <div class="container home-page">
      <span class="header-text">
          Oki Cospi
      </span>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="stylus" scoped>
    .home-page
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url('./../assets/boat-girl.jpg')
        background-size: cover
        grid-column-end: span 3
        height: 100vh
        span
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%,-50%)
            font-size: 10em
            color: white            
</style>



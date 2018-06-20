<template>
  <div class="container landing-page">
    <div class="background-div">
      <h1 class="title-text">
        Oki Cospi
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style lang="stylus" scoped>
  .landing-page
    grid-area: landing
    min-width: 100vmin
    min-height: 100vmin
  .background-div
    background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url('./../assets/boat-girl.jpg')
    background-size: cover
    width: 100%
    min-width: 100vmin
    min-height: 100vmin
    display: flex
    justify-content: center
    align-items: center
    position: absolute 
    left: 0
    top: 0
    z-index: -1
  .title-text
    font-size: 4em
    color: white
  @media screen and (min-width: 700px)
    .title-text
      font-size: 10em
</style>



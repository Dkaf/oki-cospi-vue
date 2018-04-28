<template>
  <div class="nav-bar">
    <router-link to="/">Home</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/patreon">Patreon</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="stylus" scoped>
  .nav-bar
    position: absolute
    right: 0
    padding: 20px
    z-index: 1
    a
      font-size: 2.5em
      color: white
      text-decoration: none
      padding: 10px
      &:active
        color: white
</style>



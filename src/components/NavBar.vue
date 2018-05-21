<template>
  <div class="nav-bar">
    <router-link v-for="(link, index) in links"
      :key="index"
      :to="link.path"
      :class="linkColor"
    >
      {{link.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
    return {
      links: [
        {path: '/', name: 'Home'},
        {path: '/blog', name: 'Blog'},
        {path: '/patreon', name: 'Patreon'}
      ],
      linkColor: 'white'
    }
  },
  watch: {
    '$route' () {
      this.$route.path !== '/' ? this.linkColor = 'grey' : this.linkColor = 'white'
    }
  }
}
</script>

<style lang="stylus" scoped>
  font-color = #2c3e50
  .nav-bar
    position: absolute
    right: 0
    padding: 20px
    z-index: 1
    a
      font-size: 2.5em
      text-decoration: none
      padding: 10px
  .grey
    color: font-color
    &:active
      color: font-color
  .white
    color: white
    &:active
      color: white
</style>



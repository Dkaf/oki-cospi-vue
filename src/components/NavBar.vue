<template>
  <div class="nav-bar">
    <div class="logo-container">
      <img id="logo" :class="{tada: isAnimated}" class="animated" src="./../assets/Sticker.png" />
    </div>
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
        {path: '/store', name: 'Store'}
      ],
      linkColor: 'white',
      isAnimated: false
    }
  },
  methods: {
    triggerAnimate() {
      return this.isAnimated = !this.isAnimated
    }
  },
  created: function() {
    setInterval(this.triggerAnimate, 3000)
    this.$route.path !== '/' ? this.linkColor = 'grey' : this.linkColor = 'white'
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
    display: flex
    flex-flow: column
    a
      font-size: 2.5em
      text-decoration: none
      padding: 10px
    #logo
      height: 100px
      padding: 25px
      position: absolute
  .grey
    color: font-color
    &:active
      color: font-color
  .white
    color: white !important
    &:active
      color: white !important
  @media screen and (min-width: 700px)
    .nav-bar
      flex-flow: row
      justify-content: flex-end
      #logo
        height: 200px
      .logo-container
        margin-right: auto
</style>
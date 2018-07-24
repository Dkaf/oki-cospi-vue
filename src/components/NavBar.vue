<template>
  <div class="nav-bar">
    <div class="logo-container">
      <img id="logo" :class="{tada: isAnimated}" class="animated" src="./../assets/Sticker.png" />
    </div>
    <h1 class="page-title">{{pageTitle}}</h1>
    <div class="link-container">
      <router-link v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        class="white"
      >
        {{link.name}}
      </router-link>
    <router-link to="/store/cart" class="cart-link">
      <font-awesome-icon icon="shopping-cart" class="cart-icon" size="sm" style="color: white;"/>
    </router-link>
    </div>
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
      isAnimated: false,
      currentPath: this.$route.path 
    }
  },
  methods: {
    triggerAnimate() {
      return this.isAnimated = !this.isAnimated
    }
  },
  created: function() {
    setInterval(this.triggerAnimate, 3000)
    // this.$route.path !== '/' ? this.linkColor = 'grey' : this.linkColor = 'white'
  },
  computed: {
    pageTitle() {
      if(this.$route.path == '/blog') {
        return 'A Very Oki Blog'
      }
      else if(this.$route.path == '/store') {
        return 'Store'
      } else {
        return 'Oki Cospi'
      }
    }
  }
  // watch: {
  //   '$route' () {
  //     this.$route.path !== '/' ? this.linkColor = 'grey' : this.linkColor = 'white'
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  font-color = #2c3e50

  .page-title
    color: white
    font-size: 5em
    align-self: flex-end
  .nav-bar
    display: flex
    flex-flow: column
    background: url('./../assets/blog-header.gif') no-repeat
    background-position: center bottom
    background-color: #ca485a
    grid-area: nav
    a
      font-size: 2.5em
      text-decoration: none
      padding: 10px
    #logo
      height: 100px
      padding: 25px
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
      justify-content: space-between
      #logo
        height: 125px
      .link-container
        display: flex
      .cart-link
        align-self: flex-end
        .cart-icon
          padding: 15px
</style>
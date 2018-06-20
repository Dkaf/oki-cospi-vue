<template>
  <div id="app">
    <nav-bar/>
    <router-view class="view"/>
    <!-- <footer-bar /> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'

export default {
  name: 'app',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style lang="stylus">
font-color = #2c3e50

html, body
  height: 100vh

@font-face {
  font-family: 'Coves Light'
  src: url("./assets/coves-font/coves_light-webfont.ttf") format("ttf"),
       url("./assets/coves-font/coves_light-webfont.woff2") format("woff2"),
       url("./assets/coves-font/coves_light-webfont.woff") format("woff")
}

@font-face {
  font-family: 'Coves Bold'
  src: url("./assets/coves-font/coves_bold-webfont.ttf") format("ttf"),
       url("./assets/coves-font/coves_bold-webfont.woff2") format("woff2"),
       url("./assets/coves-font/coves_bold-webfont.woff") format("woff")
}

body
  margin: 0
  #app
    @css {
      grid-template-areas:
        "nav "
        "main";
    }
    display: grid
    .view
      grid-area: main
    .nav-bar
      grid-area: nav
    font-family: 'Coves Light', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: font-color
    height: 100vh
    h1, h2, h3
      margin: 0
      font-weight: normal
      font-family: 'Coves Bold'
</style>

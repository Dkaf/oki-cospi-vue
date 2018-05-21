<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar,
  }
}
</script>

<style lang="stylus">
font-color = #2c3e50

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
    font-family: 'Coves Light', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: font-color
</style>

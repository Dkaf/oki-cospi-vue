<template>
  <div id="app">
    <home-page />
    <text-section />
    <image-gallery :photos="photos"/>
    <social-media />
    <footer-bar />
  </div>
</template>

<script>
import HomePage from './components/HomePage'
import ImageGallery from './components/ImageGallery'
import TextSection from './components/TextSection'
import SocialMedia from './components/SocialMedia'
import FooterBar from './components/FooterBar'

export default {
  name: 'app',
  components: {
    HomePage,
    ImageGallery,
    TextSection,
    SocialMedia,
    FooterBar
  },
  data: function() {
    return {
      photos: [
        {id: 1, url:require('./assets/cindy-garage.jpg'), alt: 'cindy-garage'},
        {id: 2, url:require('./assets/kirin-1.jpg'), alt: 'kirin'},
        {id: 3, url:require('./assets/starfire.jpg'), alt: 'starfire'},
        {id: 4, url:require('./assets/velvet_2.jpg'), alt: 'velvet'},
      ]
    }
  }
}
</script>

<style lang="stylus">

@font-face {
  font-family: 'Coves Light';
  src: url("./assets/coves-font/coves_light-webfont.ttf") format("ttf"),
       url("./assets/coves-font/coves_light-webfont.woff2") format("woff2"),
       url("./assets/coves-font/coves_light-webfont.woff") format("woff")
}

@font-face {
  font-family: 'Coves Bold';
  src: url("./assets/coves-font/coves_bold-webfont.ttf") format("ttf"),
       url("./assets/coves-font/coves_bold-webfont.woff2") format("woff2"),
       url("./assets/coves-font/coves_bold-webfont.woff") format("woff")
}

body
  margin: 0;
  #app
    font-family: 'Coves Light', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(100px, auto);
    grid-gap: 10px;
  .header-text
    font-family: 'Coves Bold'
  .container
    margin-bottom: 100px
</style>

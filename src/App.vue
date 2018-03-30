<template>
  <div id="app">
    <home-page />
    <image-gallery :photos="photos"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import ImageGallery from './components/ImageGallery.vue'

export default {
  name: 'app',
  components: {
    HomePage,
    ImageGallery
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
body
  margin: 0;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(100px, auto);
    grid-gap: 10px;
  }
</style>

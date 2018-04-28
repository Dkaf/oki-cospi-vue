<template>
  <div class="home-page" >
    <landing-page />
    <text-section />
    <image-gallery :photos="photos"/>
    <social-media />
    <footer-bar />
  </div>
</template>

<script>
import LandingPage from './LandingPage'
import ImageGallery from './ImageGallery'
import TextSection from './TextSection'
import SocialMedia from './SocialMedia'
import FooterBar from './FooterBar'

export default {
  name: 'HomePage',
  components:{
    LandingPage,
    ImageGallery,
    TextSection,
    SocialMedia,
    FooterBar
  },
  data: function() {
    return {
      photos: [
        {id: 1, url:require('./../assets/cindy-garage.jpg'), alt: 'cindy-garage'},
        {id: 2, url:require('./../assets/kirin-1.jpg'), alt: 'kirin'},
        {id: 3, url:require('./../assets/starfire.jpg'), alt: 'starfire'},
        {id: 4, url:require('./../assets/velvet_2.jpg'), alt: 'velvet'},
      ]
    }
  }
}
</script>

<style lang="stylus">
  .home-page
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(100px, auto);
    grid-gap: 10px;
  .header-text
    font-family: 'Coves Bold'
  .container
    margin-bottom: 100px
</style>



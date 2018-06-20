<template>
  <div class="home-page" >
    <landing-page />
    <text-section />
    <image-gallery :photos="photos"/>
    <social-media />
  </div>
</template>

<script>
import LandingPage from './LandingPage'
import ImageGallery from './ImageGallery'
import TextSection from './TextSection'
import SocialMedia from './SocialMedia'

export default {
  name: 'HomePage',
  components:{
    LandingPage,
    ImageGallery,
    TextSection,
    SocialMedia
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
  .header-text 
    font-size: 4em
    padding: 25px
  @css {
    .home-page {
      display: grid;
      grid-column-gap: 20px;
      grid-template-areas:
        "landing"
        "  bio  "
        "gallery"
        "social "
    }
  }
  @media screen and (min-width: 700px)
    .header-text
      font-size: 8em
    @css {
    .home-page {
      grid-template-columns: 20vw auto 20vmin;
      grid-template-areas:
        "landing landing landing"
        ".......   bio   ......."
        "....... gallery ......."
        "....... social  ......."
    }
  }
\
</style>



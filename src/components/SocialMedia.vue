<template>
  <div class="container social-media">
    <!-- <transition-title text="Social" /> -->
    <h1 data-aos="fade-right" class="header-text main-header">Social</h1>
    <!-- <div id="twitter-container">
      <h2 data-aos="fade-up" class="header-text sub-header">Twitter</h2>
      <a class="twitter-timeline"
         data-chrome="transparent nofooter noborders"
         data-tweet-limit="3"
         href="https://twitter.com/allyssooonnnn?ref_src=twsrc%5Etfw">
        Tweets by allyssooonnnn
      </a>
    </div> -->
    <div id="instagram-container">
      <h2 data-aos="fade-up" class="header-text sub-header">Instagram</h2>
      <!-- LightWidget WIDGET -->
      <iframe src="//lightwidget.com/widgets/93ab91e65f3a53838d541a449db8c9df.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 80%; border: 0; overflow: hidden;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia'
}
</script>

<style lang="stylus" scoped>
  .social-media
    grid-area: social
    display: flex
    flex-flow: row wrap
    justify-content: space-evenly
  .sub-header
    font-size: 3em
  .main-header
    flex-basis: 100%
  #instagram-container
    width: 100%
</style>


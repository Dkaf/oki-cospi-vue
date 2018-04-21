<template>
  <div class="container social-media">
    <!-- <transition-title text="Social" /> -->
    <span data-aos="fade-right" class="header-text main-header">Social</span>
    <div id="twitter-container">
      <span data-aos="fade-up" class="header-text sub-header">Twitter</span>
      <a class="twitter-timeline"
         data-chrome="transparent nofooter noborders"
         data-tweet-limit="3"
         href="https://twitter.com/allyssooonnnn?ref_src=twsrc%5Etfw">
        Tweets by allyssooonnnn
      </a>
    </div>
    <div id="instagram-container">
      <span data-aos="fade-up" class="header-text sub-header">Instagram</span>
      <!-- LightWidget WIDGET -->
      <iframe src="//lightwidget.com/widgets/93ab91e65f3a53838d541a449db8c9df.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>
    </div>
  </div>
</template>

<script>
import TransitionTitle from './TransitionTitle'

export default {
  name: 'SocialMedia',
  components: {
    TransitionTitle
  }
}
</script>

<style lang="stylus" scoped>
  .social-media
    grid-column: 2
    display: grid
    .main-header
      grid-column: span 3
      font-size: 8em
    .sub-header
      font-size: 5em
</style>


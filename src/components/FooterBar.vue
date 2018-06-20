<template>
  <div class="footer-bar">
    <a href="https://twitter.com/allyssooonnnn?ref_src=twsrc%5Etfw">
      <font-awesome-icon class="icon twitter-icon" :icon="twitterIcon" size="2x" />
    </a>
    <a href="https://www.instagram.com/allyssooonnn/">
      <font-awesome-icon class="icon instagram-icon" :icon="instagramIcon" size="2x" />
    </a>
    <a href="https://www.patreon.com/okicospi">
      <font-awesome-icon class="icon patreon-icon" :icon="patreonIcon" size="2x" />
    </a>
    <a href="https://www.facebook.com/OkiCospi/">
      <font-awesome-icon class="icon facebook-icon" :icon="facebookIcon" size="2x"/>
    </a>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {faTwitter, faInstagram, faFacebook, faPatreon} from '@fortawesome/fontawesome-free-brands'


export default {
  name: 'FooterBar',
  computed: {
    twitterIcon() {
      return faTwitter
    },
    instagramIcon() {
      return faInstagram
    },
    facebookIcon() {
      return faFacebook
    },
    patreonIcon() {
      return faPatreon
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="stylus" scoped>
  .footer-bar
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    background-color: #2c3e50
    height: 75px
  .icon
    color: white
    padding: 10px
</style>


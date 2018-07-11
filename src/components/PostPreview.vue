<template>
  <div class="post-preview">
    <router-link :to="'/blog/' + slug">
      <article class="media">
        <figure class="img-container">
          <img class="thumbnail" v-if="image" :src="image" alt="">
          <img class="thumbnail" v-else src="http://via.placeholder.com/250x250" alt="">
        </figure>
        <h2 class="title">{{ title }}</h2>
        <p class="summary">{{ summary }}</p>
      </article>
    </router-link>
   </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: ['slug','image','title','summary']
}
</script>

<style lang="stylus" scoped>
  lightPink = #FFB5B5
  darkPink = #FF7878
  postWidth = 335px
  altWidth = 690px

  a
    text-decoration: none 
    &:visited
      color: white
  .media
    max-width: postWidth
    height: 380px
    display: flex
    flex-flow: column
    justify-content: space-between
    color: white
    background: lightPink
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    transition: all 0.3s cubic-bezier(.25,.8,.25,1)
    &:hover
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    .title
    .summary
      padding: 15px 25px
      margin: 0
      text-align: left
    .summary
      font-size: 1.25em
      line-height: 1.58
      letter-spacing: -.003em
  .img-container
    background: darkPink
    width: 100%
    height 40%
    margin: 0
    padding: 15px 0
  .thumbnail
    flex-basis: 100%
    max-width: 100%
    height: 100%
    order: -1
  @media screen and (min-width: 700px)
    .alt
      width: altWidth
      display: grid
      grid: auto auto auto / 1fr 1fr
      .thumbnail
        grid-area: 1 / 2 / last-line / 2
      .date
      .title
      .summary
        align-self: center
</style>




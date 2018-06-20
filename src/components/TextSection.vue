<template>
  <div class="container text-section">
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum veniam, dolor debitis inventore quae adipisci cumque iste non distinctio doloremque sequi rem facere tempora hic, est corporis consequatur. Eos, earum?
      </p>
  </div>
</template>

<script>
export default {
  name: 'TextSection'
}
</script>

<style lang="stylus" scoped>
  $font-size = 3em
  .text-section
    grid-area: bio
    place-self: center
    p
      font-size: ($font-size/2)
      padding: 15px
  @media screen and (min-width: 700px)
    .text-section
      p
        font-size: $font-size
</style>


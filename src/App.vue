<template>
  <div id="app">
    <home-page />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

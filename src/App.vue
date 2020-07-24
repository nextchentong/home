<template>
  <div id="app">
    <home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style lang="stylus">
html,body
  margin 0
  padding 0
#app
  color #2c3e50
  width 100vw
  height 100vh
  background-color #282c34
</style>

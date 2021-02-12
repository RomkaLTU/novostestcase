<template>
  <div id="app">
    <lists />
  </div>
</template>

<script>
import Lists from './components/Lists.vue'

export default {
  name: 'App',
  components: {
    Lists
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

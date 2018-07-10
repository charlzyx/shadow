<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Shadow/>
  </div>
</template>

<script>
import Shadow from './components/Shadow'

export default {
  name: 'App',
  components: {
    Shadow
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

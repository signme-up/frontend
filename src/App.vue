<template>
  <div id="app">
    <img src="./assets/logo.png">
    <appLogin v-if="!show"/>
    <router-view/>
  </div>
</template>

<script>
import login from '@/components/login'
export default {
  name: 'app',
  data(){
      return {
          show: true
      }
  },
  components: {
      appLogin : login
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

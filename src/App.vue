<template>
  <div id="app">
    <router-view/>
    <table-bar></table-bar>
  </div>
</template>

<script>
// 共享资源  放在 App.vue
import TableBar from './components/TableBar'
export default {
  name: 'App',
  components:{
    TableBar
  },
  beforeCreate() {
     this.$router.push('/')
  },
}
</script>

<style>
*{margin: 0;padding: 0;list-style: none;box-sizing: border-box}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>

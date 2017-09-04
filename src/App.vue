<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <TopHeader></TopHeader>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopHeader from '@/components/header/TopHeader'
  export default {
    name: 'app',
    components: {
      TopHeader
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

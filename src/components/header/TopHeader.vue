<template>
  <div>
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/food-page">Food page</router-link>
      <router-link to="/therd">therd</router-link>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'TopHeader',
    computed: {
      topMenu () {
        return this.$store.state.menu
      }
    }
  }
</script>

<style scoped> 
    .router-link-exact-active {
      background-color: #ccc
    }
</style>

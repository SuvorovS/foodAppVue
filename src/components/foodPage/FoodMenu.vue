<template>
    <nav>
      <!-- <router-link to="/food-page/asdf">fgsdfgf</router-link>
      <router-link to="/food-page/asdf">fgsdfgf</router-link>
      <router-link to="/food-page/asdfasdf">fgsdfgf</router-link> -->
      <router-link v-for="(item, index) in menu" :to="`/food-page/${item.url}`" :key="index">{{item.title}}</router-link>
    </nav>
</template>

<script>
  export default {
    name: 'FoodMenu',
    computed: {
      menu () {
        return this.$store.state.menu
      }
    }
  }
</script>

<style>

</style>


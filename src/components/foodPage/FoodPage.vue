<template>
  <div>
    <div class="hello">
      <h1>{{msg}}</h1>
      <div>
        <food-menu></food-menu>
      </div>
    </div>
    <hr>
    <div>{{foodType}}</div>
    <div class="food_block">
      <food-list></food-list>
    </div>
    <div class="food_block">
      <food-details></food-details>
    </div>
    <div class="food_block">
      <used-food></used-food>
    </div>
  </div>
</template>


<script>
  import FoodMenu from './FoodMenu'
  import FoodList from './FoodList'
  import FoodDetails from './FoodDetails'
  import UsedFood from './UsedFood'
  export default {
    name: 'FoodPages',
    data () {
      return {
        msg: 'Welcome to FoodPage page'
      }
    },
    computed: {
      foodType () {
        return this.$route.params.type
      }
    },
    components: {
      FoodMenu,
      FoodList,
      FoodDetails,
      UsedFood
    },
    mounted () {
      console.log(this.$route)
      console.log(this.$store.state.menu)
    }
  }
</script>


<style scoped>
  .food_block {

  }
</style>

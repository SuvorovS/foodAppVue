<template>
  <div class="foodDetails">
    {{curent}}
  </div>
</template>

<script>
  export default {
    name: 'FoodDetails',
    computed: {
      curent () {
              //  this.$store.state.foodList[id]
        return this.$store.state.curentFood
      }
    }
  }
</script>

<style scoped>
  .foodDetails {
    background-color: pink;
    width: 30%;
    float: left;
  }
</style>


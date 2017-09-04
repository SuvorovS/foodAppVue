<template>
  <div class="foodList">
    {{title}}
    <ul>
      <li class="foodType" v-for="food in foodList" @click="showFood">{{food.title}}</li>
    </ul>
  </div>
</template>

<script>
  // import { mapState } from 'vuex'
  export default {
    name: 'FoodList',
    data () {
      return {
        title: 'Food list'
      }
    },
    computed: {
      foodList () {
        return this.$store.state.foodList
      }
    },
    methods: {
      showFood (e) {
        console.log('123', e.target)
      }
    }
  }
</script>

<style scoped>
  .foodType{
    cursor: pointer;
  }
  .foodList {
    background-color: pink;
    width: 33.33%;
    float: left;
  }
</style>


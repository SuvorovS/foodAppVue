<template>
  <div class="foodList">
    {{title}}
    <ul>
      <li class="foodType" v-for="food in foodList" @click="addToCurentFood" :id="food.id">{{food.title}}</li>
    </ul>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex'
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
      // ...mapMutations([ 'addToCurentFood' ]),
      // showFood (e) {
      //   console.log('123', e.target)
      // },
      addToCurentFood (e) {
        let id = e.target.id - 1
        let payload = this.$store.state.foodList[id]
        this.$store.commit('addToCurentFood', payload)
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


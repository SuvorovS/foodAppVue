<template>
  <div class="foodList">
    <h4>Food list</h4>
    <input v-model="foodFilter" id="foodList_search" type="text">
    <ul>
      <li class="foodType" v-for="food in foodList" @click="add" :id="food.id">{{food.title}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'FoodList',
    data () {
      return {
        foodFilter: ''
      }
    },
    computed: {
      foodList () {
        if (this.foodFilter.length === 0) {
          return this.$store.state.foodList
        } else {
          return this.$store.state.foodList.filter(el => {
            let regexp = new RegExp(this.foodFilter, 'igm')
            if (el.title.search(regexp) === 0) {
              return el
            }
          })
        }
      }
    },
    methods: {
      ...mapMutations(['addToCurentFood']),
      add (e) {
        let id = e.target.id - 1
        console.log('id', id)
        let payload = this.$store.state.foodList[id]
        console.log('payload', payload)
        this.addToCurentFood(payload)
      }
    }
  }
</script>

<style scoped>
  #foodList_search {
    width: 100%;
  }
  .foodType{
    cursor: pointer;
  }
  .foodList {
    background-color: pink;
    width: 33.33%;
    float: left;
  }
</style>


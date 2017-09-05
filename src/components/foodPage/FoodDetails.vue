<template>
  <div class="foodDetails">
    {{curent}}
    <div><button @click="add">eat</button></div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'FoodDetails',
    computed: {
      curent () {
        return this.$store.state.curentFood
      }
    },
    methods: {
      ...mapMutations(['addToUsedFood']),
      add () {
        let payload = {eatingType: this.$route.params.type, usedFood: this.curent}
        this.addToUsedFood(payload)
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


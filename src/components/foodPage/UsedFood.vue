<template>
  <div class="usedFood">
    <ul>
      <li v-for="item in usedFood">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'UsedFood',
    computed: {
      usedFood () {
        let foodType = this.$route.params.type
        return this.$store.state.usedFood.items[foodType]
      }
    },
    mounted () {}
  }
</script>

<style scoped>
  .usedFood {
    background-color: pink;
    width: 30%;
    float: left;
  }
</style>

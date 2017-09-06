import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
asdfasd
export const state = {
  menu: [
    {title: 'Заврак', url: 'breacfast'},
    {title: 'Обед', url: 'dinner'},
    {title: 'Ужин', url: 'supper'},
    {title: 'Перекус', url: 'lunch'}
  ],
  foodList: [
    { id: 1, title: 'груша', lipids: 100 },
    { id: 2, title: 'яблоко', lipids: 200 },
    { id: 3, title: 'банан', lipids: 300 }
  ],
  curentFood: {id: 3, title: 'банан', lipids: 300},
  usedFood: {
    date: '',
    items: {
      breacfast: [
        { id: 2, title: 'яблоко', lipids: 200 },
        { id: 3, title: 'банан', lipids: 300 }
      ],
      dinner: [
        { id: 2, title: 'груша', lipids: 100 },
        { id: 3, title: 'банан', lipids: 300 }
      ],
      lunch: [],
      supper: []
    }
  }
}

const mutations = {
  addToCurentFood (state, payload) {
    console.log('mutation addToCurentFood', payload)
    state.curentFood = payload
  },
  addToUsedFood (state, payload) {
    // console.log('mutation addToUsedFood', payload)
    let usedFood = state.usedFood.items[payload.eatingType]
    usedFood.push(payload.usedFood)
  }
}

export default new Vuex.Store({
  state,
  mutations
})

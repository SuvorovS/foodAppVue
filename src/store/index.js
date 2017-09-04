import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  curentFood: [],
  usedFood: {
    changed: false,
    isFatching: false,
    date: '',
    items: [
      { id: 2, title: 'яблоко', lipids: 200 },
      { id: 3, title: 'банан', lipids: 300 }
    ]
  }
}

export default new Vuex.Store({
  state
})

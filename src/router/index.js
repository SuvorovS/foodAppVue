import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import FoodPage from '@/components/foodPage/FoodPage'
import child1 from '@/components/child1'
import Therd from '@/components/Therd'

Vue.use(Router)

const R = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/food-page',
      redirect: '/food-page/breacfast',
      name: 'FoodPage',
      component: FoodPage,
      children: [
        { // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет отображён UserProfile
          path: '/food-page/:type',
          component: child1
        }
      ]
    },
    {
      path: '/therd',
      name: 'Therd',
      component: Therd
    }
  ]
})
export default R

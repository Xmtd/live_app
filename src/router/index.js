import Vue from 'vue'
import Router from 'vue-router'
import all from '../components/all/all.vue'
import home from '../components/home/home.vue'
import stroll from '../components/stroll/stroll.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import cart from '../components/cart/cart.vue'
import register from '../components/register/register.vue'
import login from '../components/login/login.vue'


Vue.use(Router)

export default new Router({
  linkActiveClass :'active',
  routes: [
    {
      path :'/',
      // component:home,
      redirect :'/home'
    },
    {
      path :'/home',
      component:home,
      // children:[
      //   {
      //     path:'new',
      //     component :newproduct
      //   },
      //   {
      //     path:'channel/2860',
      //     component :channel
      //   },
      //   {
      //     path:'channel/2859',
      //     component :channel
      //   },
      //   {
      //
      //   }

      // ]
    },
    {
      path :'/all',
      component :all
    },
    {
      path:'/stroll',
      component :stroll
    },
    {
      path :'/cart',
      component :cart
    },
    {
      path :'/usercenter',
      component :usercenter
    },
    {
      path :'/register',
      component :register
    },
    {
      path:'/login',
      component :login
    }
  ]
})

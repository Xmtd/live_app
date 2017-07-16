import Vue from 'vue'
import Router from 'vue-router'
import all from '../components/all/all.vue'
import home from '../components/home/home.vue'
import stroll from '../components/stroll/stroll.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import cart from '../components/cart/cart.vue'
import register from '../components/register/register.vue'
import login from '../components/login/login.vue'
import detail from '../components/detailspage/detailpages.vue'
import newProduct from '../components/newProduct.vue'
import xianshitehui from '../components/activity/xianshitehui.vue'
import songyouhuika from '../components/activity/songyouhuika.vue'
import jifendaoqi from '../components/activity/jifendaoqi.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass :'active',
  routes: [
    {
      path :'/',
      component:home,
    /*  redirect :'/home',*/
      /*component :home*/
    },
    {
      path :'/home',
      component:home,

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
    },
    {
      path:'/detail',
      component :detail
    },
    {
      path :'/new',
      component :newProduct
    },
    {
      path :'/xianshitehui',
      component :xianshitehui
    },
    {
      path :'/songyouhuika',
      component :songyouhuika
    },
    {
      path :'/jifendaoqi',
      component :jifendaoqi
    },

  ]
})

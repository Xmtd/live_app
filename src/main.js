// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'

//引入mockjs的mock数据
import './Mock/mockServer'

import './components/font/iconfont.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(VueScroller)

new Vue({
  el: '#app',
  router,
  render :h=>h(App)
})

<template>
  <div>
    <router-view></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
          <p>首页</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/all">
          <i class="iconfont icon-liebiao"></i>
          <p>全部产品</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/stroll">
          <i class="iconfont icon-zhinanzhen"></i>
          <p>闲逛</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/usercenter">
          <i class="iconfont icon-yonghuzhongxin"></i>
          <p>账户中心</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./components/stylus/mixins.styl"
  html
    height :100%
    /*overflow :hidden*/
    .tab
      position :fixed
      bottom:0
      left :0
      width :100%
      height :55px
      box-sizing :border-box
      padding-top :8px
      display :flex
      box-shadow: inset 1px 1px 1px -1px grey //1px
      background :#f8f8f8


      .tab-item
        width:20%
        text-align :center
        .iconfont
          display :inline-block
          font-size 25px
          color :none
        p
          font-size :14px

    .active
      color :green



</style>

<template>
  <div class="header-wrapper">
    <div id="header">
      <router-link to="/all">
        <span class="allP"></span>
      </router-link>

    </div>
    <div class="menuWrap" ref="menuWrap">
      <ul class="menuWrap_u">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/new">新品</router-link>
          <!--<a>新品</a>-->
        </li>
        <li>
          <router-link to="/login">家务</router-link>
        </li>
        <li>
          <a>下厨</a>
        </li>
        <li>
          <a>家居服</a>
        </li>
        <li>
          <a>生活</a>
        </li>
        <li>
          <a>软装</a>
        </li>
        <li>
          <a>床品</a>
        </li>
        <li>
          <a>工作和旅行</a>
        </li>
        <li>
          <a>了解LifeVC</a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {}
    },
    created () {
      this.$nextTick(() => {
        if (!this.scroll) {
          //横向滚动
          this.scroll = new BScroll(this.$refs.menuWrap, {
            scrollX: true,
            click: true
          })
        } else {
          this.scroll.refresh()
        }

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    z-index: 300
    position: fixed
    left: 0
    top: 0
    height: 94px
    /*background :green*/
    width: 100%
    #header
      height: 48px
      background-color: rgb(137, 190, 72)
      background-image: url("../home/z8kxhm97vb8c9jk0b2kv2r27c74dfmg2.png")
      background-repeat: no-repeat
      background-size: 50%
      background-position: center
      .allP
        display: inline-block
        width: 44px
        height: 44px
        background: url("../home/tlmubtkeebcs4h1hhwyscyn9j8915857.png") no-repeat
        background-size: 50%
        background-position: center
        float: right
    .menuWrap
      overflow: hidden
      background: white
      .menuWrap_u
        width: 800px
        li
          width: 80px
          height: 46px
          line-height: 46px
          float: left
          text-align: center
          a
            width: 80px
            height: 44px
            font-size: 1.35rem
            display: inline-block
            color: #333
            transition: border 0.5s linear
      .active
        transition: border 0.5s linear
        border-bottom: 2px solid #80b532

</style>

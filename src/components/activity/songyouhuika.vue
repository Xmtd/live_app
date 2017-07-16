<template>
  <div>
    <div class="xt-wrap">
      <div class="detail-header">
        <label onclick="history.back()"></label>
        送优惠卡
       </div>
      <div style="margin-top: 55px;font-size: 24px">送优惠卡。。。。。</div>
    </div>
  </div>

</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .xt-wrap
    width :375px
    height :667px
    background :white
    position :relative
    z-index :345
    .detail-header
      text-align: center
      z-index :12
      width: 100%
      height: 40px
      line-height: 40px
      background: #89be48
      font-size: 20px
      color: white
      position: fixed
      left: 0
      top: 0
      label
        display: inline-block
        width: 37px
        height: 40px
        /*background :salmon*/
        position: absolute
        left: 0
        top: 0
        background: url("../detailspage/label.png") no-repeat
        background-size: 14px 14px
        background-position: 50% 50%
</style>

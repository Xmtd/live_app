<template>
  <div>
    <div class="app">
      <div class="detail-header">
        <label onclick="history.back()"></label>
        商品介绍
       </div>

        <div class="detail-main">
          <dl style="padding-bottom: 10px;background: #f2f2f2">
            <div class="detail-swipe">
              <mt-swipe :auto="2000">
                <mt-swipe-item>
                  <img src="http://i.lifevccdn.com/upload/AppItemHeaders/5b459e90847c46749d26aabf4df804d4_d1242x0.jpg"/>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="http://i.lifevccdn.com/upload/AppItemHeaders/5841595b23f24444abd2aec3891a2186_d1242x0.jpg"/>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="http://i.lifevccdn.com/upload/AppItemHeaders/f8c2f786d9fa4a15a96eca894cbe1b1c_d1242x0.jpg"/>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="http://i.lifevccdn.com/upload/AppItemHeaders/e32498954a1d4bdf88bcec396aae6a81_d1242x0.jpg"/>
                </mt-swipe-item>
              </mt-swipe>


            </div>

            <dd class="item-price pd05">
              <div data-v-3520427c="" class="title">耐磨高弹力旅行箱保护套</div>
              <p data-v-3520427c="" class="des">当心，别刮花了旅行箱</p>
              <div class="price-cntr clearfix" style="text-align: center;">
                <em class="icon-money-larger activity-price-color">¥</em>
                <em class="price-money-larger activity-price-color">29</em>
                <span class="normalprice-wrap">
              <em class="icon-money-smaller normal-price-color">¥</em>
              <em class="price-money-smaller normal-price-color">39</em>
              <span class="line"></span>
            </span>
              </div>
              <div class="price">
                <div class="lable-wrap">
                  <span class="promo-lable" style="color: rgb(0, 0, 0); background: rgb(254, 209, 9);">限时体验价</span>
                  <span class="promo-lable" style="color: rgb(253, 238, 238); background: rgb(205, 6, 15);">新</span>
                </div>
              </div> <!----></dd>
            <dd class="preferential">
              <span class="sp1">优惠</span>
              <span class="sp2">登录查看你的积分和优惠券</span>
            </dd>
            <dd class="GroupAttrs">
              <div class="wrap-spec">
                <table>
                  <tr>
                    <td>
                      <div class="font-medium attrtitle">颜色：</div>
                      <div class="font-small item">
                        <img src="http://i.lifevccdn.com/upload/AppItemExhibit/f8a2a34b75214f0980e4eb7fa57d3a9c.jpg"/>
                      </div>
                      <div class="font-small item2">
                        <img src="http://i.lifevccdn.com/upload/AppItemExhibit/2a2af263b5ed43bb8121aad2821f5159.jpg"/>
                        <i></i>
                      </div>

                    </td>
                  </tr>
                </table>
              </div>
              <div class="wrap-spec size">
                <table>
                  <tr>
                    <td>
                      <div class="font-medium attrtitle">尺寸：</div>
                      <div class="shop">20寸</div>
                      <div class="shop">24寸</div>
                      <div class="shop">28寸</div>
                    </td>
                  </tr>
                </table>
              </div>
            </dd>

            <dd class="spec-amount pd05 pl-2px">
              <span class="span1">数量 :</span>
              <span class="span2">
              <button class="bt1"></button><!--
              --><span>1</span><!--
              --><button class="bt2"></button>
            </span>
            </dd>

            <dd class="deliveryPanel">
              <div class="wrap-spec">
                <span class="delivery-tt">送至: </span>
                <div class="deliver-cont">
                  <p>
                    上海(满￥99免运费)
                    </p>
                  <p style="color: rgb(204, 0, 0)">
                    新会员首单，满69元免运费
                  </p>
                </div>
              </div>
            </dd>

            <div class="huodongcenter">
              <img src="http://i.lifevccdn.com/upload/combinationchart/8790d2e3fe9b4440afaeff14ca3a2a45.jpg"/>
            </div>
            <div class="huodongcenter" style="width: 375px;height: 191px">
              <img src="http://i.lifevccdn.com/upload/combinationchart/dc678db46c3b45b184a07930bb294647.jpg" />
            </div>
          </dl>
          <div class="MenuWrap" id="selmenu">
            <div id="Menus">
              <dl>
                <dd class="d1">商品介绍</dd>
                <dd>规格参数</dd>
                <dd>评论(32)</dd>
              </dl>
            </div>
          </div>
          <div class="imgs-wrap">
            <div class="imgs">
              <img src="http://i.lifevccdn.com/upload/AppItemDetails/a662d185d6e0402c81a006ac00341aad_d1242x0.jpg"/>
            </div>
            <div class="imgs">
              <img src="http://i.lifevccdn.com/upload/AppItemDetails/230adbe59d10493581654278ffcd46fd_d1242x0.jpg"/>
            </div>
            <div class="imgs">
              <img src="http://i.lifevccdn.com/upload/AppItemDetails/70ed9d9813824257bba2aecbc90a5685_d1242x0.jpg"/>
            </div>
            <div class="imgs">
              <img src="http://i.lifevccdn.com/upload/AppItemDetails/1c13a4063f634d80a1fc697a7a29a832_d1242x0.jpg"/>
            </div>
          </div>

        </div>




    </div>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'mint-ui'


  export default {
    data () {
      return {}
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width: 100%
    height: 667px
    position: sticky
    z-index: 100
    background :white
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
        background: url("./label.png") no-repeat
        background-size: 14px 14px
        background-position: 50% 50%

    .detail-main
      padding-top: 40px
      width: 100%
      .detail-swipe
        width: 100%
        height: 375px
        .mint-swipe-item
        img
          width: 100%
        .mint-swipe-indicator.is-active
          background: blue
          opacity: 0.6

      .item-price
        height: 92px
        width: 100%
        padding: 20px 0 17px
        .title
          height: 20px
          font-size: 20px
          text-align: center
        .des
          height: 15px
          margin-top: 7px
          text-align: center
          font-size: 15px
          color: #999
        .price-cntr
          height: 22px
          margin-top: 10px
          .icon-money-larger
            color: #c00
            font-style: normal
            font-size: 20px
          .price-money-larger
            color: #c00
            font-style: normal
            font-size: 22px
          .normalprice-wrap
            position: relative
            display: inline-block
            width: 36px
            height: 22px
            padding: 0 3px
            .icon-money-smaller
              font-size: 15px
              color: #000
              font-style: normal
            .price-money-smaller
              font-size: 20px
              color: #000
              font-style: normal
            .line
              display: inline-block
              width: 40px
              height: 1px
              background: #000
              position: absolute
              left: 2px
              top: 11px

        .price
          .lable-wrap
            text-align: center
            .promo-lable
              width: 130px
              height: 34px
              padding: 0 6px
              margin-right: 2px

      .preferential
        width: 100%
        height: 29px
        line-height: 29px
        padding: 5px 0 5px 7px
        border-top: 1px solid #ddd
        border-bottom: 1px solid #ddd
        .sp1
          display: inline-block
          width: 28px
          height: 24px
          line-height: 24x
          background: #cd060f;
          padding: 0 3px
          text-align: center
          color: white
        .sp2
          display: inline-block
          padding-left: 7px
          color: #cd060f
      .GroupAttrs
        width: 368px
        height: 155px
        margin-left: 7px
        .wrap-spec
          width: 368px
          height: 67px
          margin-top: 15px
          table
            width: 100%
            height: 100%

            tr
              width: 100%
              height: 100%
            td
              width: 100%
              height: 100%

              .font-medium
                font-size: 13px
                color: #666
              .font-small
                display: inline-block
                box-sizing: border-box
                margin-top: 7px
                margin-right: 11px
                width: 48px
                height: 48px
                border: 1px solid #ccc
                img
                  width: 100%
                  height: 100%
              .item2
                border: 1px solid #83b842
                position: relative
                i
                  height: 0;
                  border-style: solid;
                  border-width: 15px 15px 0;
                  border-color: transparent #83b842 #83b842 transparent;
                  /*border-color :#83b842*/
                  font-size: 0;
                  line-height: 0;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                  z-index: 9;
                  &:after
                    content: "";
                    width: 8px;
                    height: 4px;
                    display: block;
                    border-bottom: 1px solid #fff;
                    border-left: 1px solid #fff;
                    position: absolute;
                    -webkit-transform: rotate(-45deg)
                    left: 6px;
                    top: -8px;
        .size
          .attrtitle
            margin-bottom: 6px
          .shop
            display: inline-block
            width: 36px
            height: 38px
            line-height: 38px
            text-align: center
            border: 1px solid green
            margin-right: 6px
      .spec-amount
        width: 368px
        height: 42px
        margin-left:7px
        .span1
          display :inline-block
          margin-left :-6px
          width: 44px
          height: 27px
          line-height :27px
          text-align :center
          font-size :13px
          color :rgb(107, 107, 107)

        .span2
          display :inline-block
          vertical-align :middle
          width: 99px
          height: 27px
          span
            display :inline-block
            vertical-align :middle
            width :38px
            height :23px
            line-height :23px
            text-align :center
            margin-top :-15px
            border-top :1px solid #ccc
            border-bottom :1px solid #ccc
          button
            width :26px
            height :25px
            border :1px solid #ccc
          .bt1
            background :#eee url("./jian.png") no-repeat 50%
            background-size :17px 17px
          .bt2
            background :#eee url("./jia.png") no-repeat 50%
            background-size :17px 17px


      .deliveryPanel
        width: 368px
        height: 40px
        padding-left :7px
        margin-top :5px
        .wrap-spec
          height :40px
          /*line-height :40px*/
          width: 368px
          .delivery-tt
            display :inline-block
            font-size :13px
            color:rgb(107, 107, 107)
            width: auto;
            line-height: normal;   //默行高
            padding-right: .1rem
          .deliver-cont
            overflow: hidden;
            text-overflow: ellipsis;    ///文本省略
            white-space: nowrap;
            display :inline-block
            vertical-align :top
            width: 324px
            height: 40px
            p
              height :17px

      .huodongcenter
        width: 375px
        height: 111px
        img
          width :100%
      #selmenu
        position: sticky
        position: -webkit-sticky
        top: 40px
        background :white
        #Menus
          width: 375px
          height: 42px
          dl
            width: 355.5px
            display :flex
            height: 24px
            font-size :14px
            line-height :24px
            padding:8px 12px 8px 7.5px
            justify-content :space-between
            .d1
              width :60px
              height :25px
              border-radius :6px
              background :#89be48
              color :white
      .imgs-wrap
        width :100%
        .imgs
          width:100%
          img
            width :100%
  </style>


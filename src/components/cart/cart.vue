<template>
  <div>
    <div class="cart-header">
      <span>购物车</span>
    </div>
    <div class="header-login-wrap">
      <div class="header-login">
        <a class="btn-login">登录</a>
        <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
      </div>

    </div>

    <div class="header-exchange-wrap">
      <input class="input1" type="text" placeholder="礼品兑换处，请输入兑换码"/><!--
    --><input class="input2" type="button" value="兑换">

    </div>

    <div class="carts-img">
      <div class="img-wrap">
        <img src="./cart.png"/>
      </div>
      <div>
        <p>您的购物车还是空荡荡的</p>
      </div>
      <div class="carts-link">
        <a href="">赶紧去逛逛</a>
      </div>
    </div>

    <div class="carts-bottom">
      <div class="carts-title">
        <p data-v-5cc9f28f="">Rico.S为你精心推荐</p>
      </div>
      <div data-v-5cc9f28f="" class="cart-assem-list" ref="list">
        <ul data-v-5cc9f28f="" style="width: 742px;">
          <li data-v-5cc9f28f="">
            <div data-v-5cc9f28f="" class="cart-assem-item">
              <a data-v-5cc9f28f="" href="#/item/15553">
                <img data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1508061652144511_d230x230.jpg">
              </a>
              <p data-v-5cc9f28f="" class="title">水槽沥水置物架</p>
              <p data-v-5cc9f28f="" class="price">￥9</p></div>
          </li>
          <li data-v-5cc9f28f="">
          <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25231"><img
            data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
            <p data-v-5cc9f28f="" class="title">舒适轻便家居拖鞋</p>
            <p data-v-5cc9f28f="" class="price">￥19</p></div>
        </li>
          <li data-v-5cc9f28f="">
            <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25231"><img
              data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
              <p data-v-5cc9f28f="" class="title">舒适轻便家居拖鞋</p>
              <p data-v-5cc9f28f="" class="price">￥19</p></div>
          </li>
          <li data-v-5cc9f28f="">
            <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25231"><img
              data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
              <p data-v-5cc9f28f="" class="title">舒适轻便家居拖鞋</p>
              <p data-v-5cc9f28f="" class="price">￥19</p></div>
          </li>
          <li data-v-5cc9f28f="">
            <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25231"><img
              data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
              <p data-v-5cc9f28f="" class="title">舒适轻便家居拖鞋</p>
              <p data-v-5cc9f28f="" class="price">￥19</p></div>
          </li>
          <li data-v-5cc9f28f="">
            <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25231"><img
              data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
              <p data-v-5cc9f28f="" class="title">舒适轻便家居拖鞋</p>
              <p data-v-5cc9f28f="" class="price">￥19</p></div>
          </li>
          <li data-v-5cc9f28f="">
            <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25231"><img
              data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
              <p data-v-5cc9f28f="" class="title">舒适轻便家居拖鞋</p>
              <p data-v-5cc9f28f="" class="price">￥19</p></div>
          </li>


        </ul>
      </div>
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
        this.$nextTick(()=>{
            let scroll = new BScroll(this.$refs.list,{
              scrollX: true,
              click: true
            })
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-header
    height: 48px
    line-height: 48px
    background-color: rgb(137, 190, 72)
    text-align: center
    color: white
    font-size: 2rem

  .header-login-wrap
    width: 100%;
    height: 3rem;
    background-color: #f0fae6;
    padding: .8rem 0 .5rem
    .header-login
      width: 74%;
      min-height: 2.8rem;
      display: table;
      overflow: hidden;
      margin: 0 auto;
      padding: 0 0 0 21%;
      position: relative;
      .btn-login
        font-family: Microsoft YaHei, Helvetica, STHeiti, Droid Sans Fallback
        width: 18%;
        height: 2.6rem;
        display: block;
        background: #fff;
        border: 1px solid #8bc146;
        text-align: center;
        font-size: 1.5rem;
        color: #88c13e;
        line-height: 2.5rem;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
      .login-tip
        width: 100%;
        display: table-cell;
        text-align: left;
        vertical-align: middle;
        font-size: 1.4rem;
        color: #333;
        line-height: 1.5rem

  .header-exchange-wrap
    width: 100%
    height: 53px
    box-sizing: border-box
    padding: 8px 12px
    .input1
      width: 279px
      height: 33px
      outline: none
      border: 1px solid #e7e7e7
      text-align: center
      color: inherit
    .input2
      height: 33px
      width: 67px
      outline: none
      border: 1px solid #6fbd00
      text-align: center
      background: #fff
      font-size: 1.6rem
      color: #6fbd00
      letter-spacing: 1px

  .carts-img
    width: 100%
    height: 237px
    background: #F2F2F2
    .img-wrap
      width: 160px
      height: 160px
      position: relative
      left: 123px
      img
        width: 100%
    p
      width: 100%
      line-height: 1.5rem
      text-align: center
      font-size: 1.8rem
      color: rgb(102, 102, 102)
    .carts-link
      width: 100%
      height: 40px
      text-align: center
      a
        display: inline-block
        width: 118px
        height: 34px
        line-height: 34px
        border: 1px solid rgb(137, 190, 72)
        margin-top: 11px
        font-size: 1.5rem
        border-radius: 6px
        color: rgb(137, 190, 72)

  .carts-bottom
    width: 100%
    height: 220px
    .carts-title
      width: 94%
      overflow: hidden
      border-bottom: 1px solid #ccc
      text-align: left
      font-size: 1.6rem
      color: #333
      line-height: 2rem
      margin: 0 auto
      padding: .8rem 3%
    .cart-assem-list
      width: 100%;
      height :175px
      ul
        overflow :hidden
        margin-top :19px
        li
          width: 96px
          height: 144px
          /*background :darkcyan*/
          float :left
          margin :0 5px
          .cart-assem-item
            a
              display :inline-block
              width: 96px
              height: 96px
              background :darkgoldenrod
              img
                width :100%
            .title
              width: 100%;
              overflow: hidden;
              display: block;
              text-align: left;
              font-size: 1rem;
              color: #333;
              line-height: 2rem;
              font-weight: 400;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: keep-all
            .price
              width: 100%;
              overflow: hidden;
              display: block;
              text-align: left;
              font-size: 1rem;
              color: #333;
              line-height: 2rem;
              font-weight: 400;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: keep-all
  </style>

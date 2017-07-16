<template>
  <div>
    <div class="stroll-header">
      <span>闲逛</span>
    </div>
    <scroller>
      <div class="stroll-wrap" style="padding-bottom: 102px">
        <div class="stroll-left">
          <div class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img class="stroll-item-img" src='./e726ff1fb1d44685a91cf76ff56d5018.jpg'>
                <span class="tag-new">New</span>
              </div>
              <h3 class="stroll-item-title">
                <a href="javascript:;">分类整理收纳箱</a>
              </h3>
              <div class="stroll-price-bar">
                <span class="price">￥<a>49</a></span>
                <span class="comment">月销 4082</span>
              </div>
            </div> <!----> <!----></div>
          <div class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img class="stroll-item-img" src='./e726ff1fb1d44685a91cf76ff56d5018.jpg'>
                <span class="tag-new">New</span>
              </div>
              <h3 class="stroll-item-title">
                <a href="javascript:;">分类整理收纳箱</a>
              </h3>
              <div class="stroll-price-bar">
                <span class="price">￥<a>49</a></span>
                <span class="comment">月销 4082</span>
              </div>
            </div> <!----> <!----></div>
          <div class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img class="stroll-item-img" src='./e726ff1fb1d44685a91cf76ff56d5018.jpg'>
                <span class="tag-new">New</span>
              </div>
              <h3 class="stroll-item-title">
                <a href="javascript:;">分类整理收纳箱</a>
              </h3>
              <div class="stroll-price-bar">
                <span class="price">￥<a>49</a></span>
                <span class="comment">月销 4082</span>
              </div>
            </div> <!----> <!----></div>
          <div class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img class="stroll-item-img" src='./e726ff1fb1d44685a91cf76ff56d5018.jpg'>
                <span class="tag-new">New</span>
              </div>
              <h3 class="stroll-item-title">
                <a href="javascript:;">分类整理收纳箱</a>
              </h3>
              <div class="stroll-price-bar">
                <span class="price">￥<a>49</a></span>
                <span class="comment">月销 4082</span>
              </div>
            </div> <!----> <!----></div>

        </div>
        <div class="stroll-right">
          <div class="stroll-wrap2">
            <div class="cat-menu-a">
              <span>40元包一年</span>
            </div>
            <div class="cat-menu-a">
              <span>今日新品</span>
            </div>
            <div class="cat-menu-a">
              <span>送500元积分</span>
            </div>
            <div class="cat-menu-a">
              <span>金币商城</span>
            </div>
          </div>
          <div class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img class="stroll-item-img" src='./e726ff1fb1d44685a91cf76ff56d5018.jpg'>
                <span class="tag-new">New</span>
              </div>
              <h3 class="stroll-item-title">
                <a href="javascript:;">分类整理收纳箱</a>
              </h3>
              <div class="stroll-price-bar">
                <span class="price">￥<a>49</a></span>
                <span class="comment">月销 4082</span>
              </div>
            </div> <!----> <!----></div>
          <div class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img class="stroll-item-img" src='./e726ff1fb1d44685a91cf76ff56d5018.jpg'>
                <span class="tag-new">New</span>
              </div>
              <h3 class="stroll-item-title">
                <a href="javascript:;">分类整理收纳箱</a>
              </h3>
              <div class="stroll-price-bar">
                <span class="price">￥<a>49</a></span>
                <span class="comment">月销 4082</span>
              </div>
            </div> <!----> <!----></div>
          <div class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img class="stroll-item-img" src='./e726ff1fb1d44685a91cf76ff56d5018.jpg'>
                <span class="tag-new">New</span>
              </div>
              <h3 class="stroll-item-title">
                <a href="javascript:;">分类整理收纳箱</a>
              </h3>
              <div class="stroll-price-bar">
                <span class="price">￥<a>49</a></span>
                <span class="comment">月销 4082</span>
              </div>
            </div> <!----> <!----></div>
        </div>
      </div>
    </scroller>

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
  .stroll-header
    z-index :34
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 48px
    line-height: 48px
    background-color: rgb(137, 190, 72)
    text-align: center
    color: white
    font-size: 2rem
  .stroll-wrap
    width: 100%
    margin-top: 48px

    overflow :hidden
    .stroll-left
      width: 50%
      float: left
      .stroll-item
        margin: 3%;
        width: 94%;
        .stroll-type-item
          margin: 0 1%
          .stroll-item-layer
            position :relative
            border-radius: 8px
            img
              max-width :100%
              border-radius: 8px
            span
              background-color: #79da87;
              overflow: hidden;
              display: inline-block;
              text-align: left;
              font-size: .8rem;
              color: #fff;
              line-height: 1.4rem;
              text-transform: uppercase;
              padding: 0 .5rem;
              position: absolute;
              left: 0;
              top: .8rem;
              z-index: 6;
              white-space: nowrap;
              word-break: keep-all;
              text-overflow: ellipsis;
          .stroll-item-title
              white-space :nowrap
              overflow :hidden
              text-overflow :ellipsis
              font-size: .95rem;
              padding: .4rem 0 .2rem
              font-weight :400
              a
                color: #333;
                text-decoration: none;
                font-size: 1.35rem
          .stroll-price-bar
            text-align: left;
            width: 100%;
            font-size: .9rem;
            height: 1.5rem;
            overflow: hidden
            .price
              font-size: 1.8rem;
              line-height: 1.5rem;
              display: inline-block;
              color: #ff475d;
              font-weight: 400;
              overflow: hidden;
              text-align: left;
              width: auto
              a
                color: #ff475d
            .comment
              font-size: 1.4rem;
              line-height: 1.5rem;
              width: auto;
              max-width: none;
              overflow: hidden;
              float: right;
              display: inline-block;
              text-align: right;
              color: #999;
              white-space: nowrap;
              word-break: keep-all;
              text-overflow: ellipsis
    .stroll-right
      float: left
      width: 50%
      /*background :rgba(255,3,4,.3)*/
      .stroll-wrap2
        width :94
        height :124.44px
        margin :5.6px
        padding :3%
        /*background :gray*/
        .cat-menu-a
          text-align :center
          width :48%
          height :48%
          line-height :60px
          font-size :1.35rem
          margin-bottom :1%
          margin-left :1%
          float :left
          color:#4a4a4a
          border-radius :8px
          background-color: #eaeaea



      .stroll-item
        margin: 3%;
        width: 94%;
        .stroll-type-item
          margin: 0 1%
          .stroll-item-layer
            position :relative
            border-radius: 8px
            img
              max-width :100%
              border-radius: 8px
            span
              background-color: #79da87;
              overflow: hidden;
              display: inline-block;
              text-align: left;
              font-size: .8rem;
              color: #fff;
              line-height: 1.4rem;
              text-transform: uppercase;
              padding: 0 .5rem;
              position: absolute;
              left: 0;
              top: .8rem;
              z-index: 6;
              white-space: nowrap;
              word-break: keep-all;
              text-overflow: ellipsis;
          .stroll-item-title
            white-space :nowrap
            overflow :hidden
            text-overflow :ellipsis
            font-size: .95rem;
            padding: .4rem 0 .2rem
            font-weight :400
            a
              color: #333;
              text-decoration: none;
              font-size: 1.35rem
          .stroll-price-bar
            text-align: left;
            width: 100%;
            font-size: .9rem;
            height: 1.5rem;
            overflow: hidden
            .price
              font-size: 1.8rem;
              line-height: 1.5rem;
              display: inline-block;
              color: #ff475d;
              font-weight: 400;
              overflow: hidden;
              text-align: left;
              width: auto
              a
                color: #ff475d
            .comment
              font-size: 1.4rem;
              line-height: 1.5rem;
              width: auto;
              max-width: none;
              overflow: hidden;
              float: right;
              display: inline-block;
              text-align: right;
              color: #999;
              white-space: nowrap;
              word-break: keep-all;
              text-overflow: ellipsis
</style>

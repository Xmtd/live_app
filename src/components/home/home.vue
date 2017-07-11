<template>
 <div>
   <div class="header-wrapper">
     <div id="header">
       <span class="allP"></span>
     </div>
     <div class="menuWrap">
       <ul class="menuWrap_u">
         <li>
           <a>首页</a>
         </li>
         <li>
           <a>新品</a>
         </li>
         <li>
           <a>家务</a>
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

   <div class="swiper">
     <!--<img src="./09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"/>-->
     <mt-swipe :auto="2000">
       <mt-swipe-item>
         <div>
           <img src="./09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"/>
         </div>

       </mt-swipe-item>
       <mt-swipe-item>
         <div>
           <img src="./09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"/>
         </div>
       </mt-swipe-item>
       <mt-swipe-item>
         <div>
           <img src="./09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"/>
         </div>
       </mt-swipe-item>
     </mt-swipe>
   </div>

   <div class="img-wrap1">
      <img src="./b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg"/>
   </div>
    <!--暑假新品-->
   <div class="newproduct-wrap">
      <img src="./9518bc17021a40d28bffa8eb521f6878_d1242x0.jpg"/>
   </div>
    <!--新品首发 大图-->
   <div class="img-wrap2">
     <img src="./c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg"/>
   </div>
    <!--积分特价-->
   <div class="img-wrap3">
     <img src="./7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg"/>
   </div>
   <!--老会员补货区-->
   <div class="img-wrap4">
     <img src="./3cea975b99f9458198e9ed706af9b391_d1242x0.jpg"/>
   </div>

 </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';

    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    z-index :300
    position :fixed
    left :0
    top :0
    height :94px
    /*background :green*/
    width :100%
    #header
      /*position :fixed
      left :0
      top:0*/
      height :48px
      background-color :rgb(137,190,72)
      background-image :url("./z8kxhm97vb8c9jk0b2kv2r27c74dfmg2.png")
      background-repeat:no-repeat
      background-size :50%
      background-position :center
      .allP
        display :inline-block
        width :44px
        height :44px
        background :url("./tlmubtkeebcs4h1hhwyscyn9j8915857.png") no-repeat
        background-size :50%
        background-position :center
        float :right
    .menuWrap
      overflow :hidden
      background :white
      .menuWrap_u
        width :800px
        li
          width :80px
          height :46px
          line-height :46px
          float :left
          text-align :center
          /*border-bottom: 2px solid #80b532*/
          a
            font-size :1.35rem
            display :inline-block
            color:#333

  .swiper
    width :100%
    height :250px
    margin-top :94px
    img
        width :100%
      /*height :100%*/
  .img-wrap1
    overflow :hidden
    width :100%
    height :90px
    background :#eee
    img
      width 100%
  .newproduct-wrap
    width :100%
    height :150px
    background :#eee
    margin-top: 1rem
    img
      width :100%
  .img-wrap2
    width :100%
    height :925px
    img
      width :100%
  .img-wrap3
    width :100%
    height :238px
    background :#eee
    padding-bottom :1rem
    img
      width :100%
  .img-wrap4
    width :100%
    height :310px
    background :#eee
    img
      width :100%
</style>

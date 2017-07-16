<template>
  <div>
    <!-- <div class="header-wrapper">
       <div id="header">
         <router-link to="/all">
           <span class="allP"></span>
         </router-link>

       </div>
       <div class="menuWrap" ref="menuWrap">
         <ul class="menuWrap_u">
           <li>
             <a>首页</a>
           </li>
           <li>
             <router-link to="/new">新品</router-link>
             &lt;!&ndash;<a>新品</a>&ndash;&gt;
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
     </div>-->

    <live-header></live-header>

    <scroller :on-infinite="infinite"
              :on-refresh="refresh"

    >

      <div class="main-wrap" id="w">

        <div class="swiper">
          <mt-swipe :auto="2000">
            <mt-swipe-item>
              <router-link to="/login">
                <img src="./09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"/>
              </router-link>

            </mt-swipe-item>
            <mt-swipe-item>
              <router-link to="/detail">
                <img src="http://i.lifevccdn.com/upload/IndexBanner/924590309cb749fabf810a832a402984_d1242x0.jpg"/>
              </router-link>

            </mt-swipe-item>
            <mt-swipe-item>
              <img src="http://i.lifevccdn.com/upload/IndexBanner/dd0e77b30b7a4457ad4bff10a5ef028e_d1242x0.jpg"/>
            </mt-swipe-item>
          </mt-swipe>
        </div>

        <div class="img-wrap3" v-for="(item,index) in lists" key="index">
          <img v-lazy="item.local" :usemap='"#"+item.planet'
          />
        </div>

        <map name="planetmap" id="planetmap">
          <area
            shape="rect"
            coords="0,0,123,88"
            href="http://localhost:8080/#/xianshitehui"
            target="_self"
            alt="Sun"/>
          <area
            shape="rect"
            coords="123,0,250,88"
            href="http://localhost:8080/#/songyouhuika"
            target="_self"
            alt="Sun"/>
          <area
            shape="rect"
            coords="251,0,375,89"
            href="http://localhost:8080/#/jifendaoqi"
            target="_self"
            alt="Sun"/>

        </map> <!--活动-->
        <map name="planetmap1" id="planetmap1">
          <area shape="rect" coords="0,1,375,148"
                target="_self" href="http://www.baidu.com"
          >
        </map> <!--家务收纳-->
        <map name="planetmap2" id="planetmap2">
          <area href="http://im.qq.com/" shape="rect" coords="0,64,375,231">
          <area href="https://mail.qq.com/cgi-bin/loginpage" shape="rect" coords="0,240,375,407">
          <area href="http://weixin.qq.com/" shape="rect" coords="0,407,375,573">
          <area href="https://qzone.qq.com/" shape="rect" coords="0,573,123,749">
          <area href="http://v.qq.com/download.html#pc" shape="rect" coords="123,573,251,749">
          <area href="http://lol.qq.com/index.shtml?ADTAG=media.innerenter.qqcom.index_navigation" shape="rect" coords="251,573,375,749">
          <area href="" shape="rect" coords="0,749,123,925">
          <area href="" shape="rect" coords="123,749,251,925">
          <area href="" shape="rect" coords="251,749,375,925">
        </map><!--新品首发-->
        <map name="planetmap3" id="planetmap3">
          <area data-v-46782024="" shape="rect" coords="3,46,86,158">
          <area data-v-46782024="" shape="rect" coords="93,46,191,164">
          <area data-v-46782024="" shape="rect" coords="191,46,281,164">
          <area data-v-46782024="" shape="rect" coords="285,46,371,164">
          <area data-v-46782024="" shape="rect" coords="3,170,90,294">
          <area data-v-46782024="" shape="rect" coords="93,170,183,294">
          <area data-v-46782024="" shape="rect" coords="187,170,281,294">
          <area data-v-46782024="" shape="rect" coords="281,170,375,294">
        </map> <!--老会员补货区-->
        <map name="planetmap4" id="planetmap4">
          <area shape="rect" coords="0,0,375,100">
        </map> <!--49元保一年-->
        <map name="planetmap5" id="planetmap5">
          <area data-v-46782024="" shape="rect" coords="0,0,375,151">
          <area data-v-46782024="" shape="rect" coords="3,158,168,330">
          <area data-v-46782024="" shape="rect" coords="187,158,367,330">
          <area data-v-46782024="" shape="rect" coords="3,337,180,509">
          <area data-v-46782024="" shape="rect" coords="183,337,367,509">
          <area data-v-46782024="" shape="rect" coords="3,516,180,682">
          <area data-v-46782024="" shape="rect" coords="187,516,367,675">
        </map> <!--家务-->
      </div>

    </scroller>
    <a class="backTop" href="w" v-show="backShow"></a>

  </div>

</template>

<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem} from 'mint-ui'
  import BScroll from 'better-scroll'
  import {Lazyload} from 'mint-ui'
  import axios from 'axios'
  import header from '../header/header.vue'


  Vue.use(Lazyload);

  Vue.nextTick(function () {
    // DOM 更新了
    console.log('更新了')
  })
  export default {

    data () {
      return {
        items: [],
        lists: [],
        top: 0,
        bottom: 0,
        backShow: false,
        clickMap: ''


      }
    },


    updated () {
      /* this.$nextTick(()=>{
       console.log(scrollt)
       })*/

      var back = document.getElementById("w")
      /*console.log(back)*/
      if (back.getBoundingClientRect().top < -800) {
        this.backShow = true
      } else {
        this.backShow = false
      }
    },
    components: {
      'live-header': header,
    },

    created () {
      axios.get('/api/homeImg')
        .then(response => {
          var result = response.data

          if (result.code === 0) {
            this.items = result.data
            var imgArr = this.items
            for (let i = 0; i <= 1; i++) {
              this.lists.push(imgArr[i])
            }
            this.top = 1
            this.bottom = 1
            /*this.lists = result.data*/
          }

        });
    },
    methods: {
      refresh(done) {
        setTimeout(() => {
          /*  let start = this.top-1

           for (let i = start; i > start - 2; i--) {
           this.lists.splice(0, 0, this.items[i].local)
           }

           this.top = this.top - 2;*/

          done()
        }, 500)
      },
      infinite(done) {
        if (this.bottom >= 25) {
          setTimeout(() => {
            done(true)
          }, 500)
          return;
        }

        setTimeout(() => {

          let start = this.bottom + 1
          for (let i = start; i < start + 2; i++) {
            this.lists.push(this.items[i])
          }
          this.bottom = this.bottom + 2;
          setTimeout(() => {
            done()
          })
        }, 500)
      }
    },



  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main-wrap
    padding-bottom: -2px

    .swiper
      width: 100%
      height: 250px
      margin-top: 94px
      .mint-swipe-item
        img
          width: 100%
      .mint-swipe-indicator.is-active
        background: blue
        opacity: 0.6
    .newproduct-wrap
      width: 100%
      height: 150px
      background: #eee
      margin-top: 1rem
      img
        width: 100%
    .img-wrap3
      width: 100%
      height: auto
      /*height: 238px*/
      background: #eee
      padding-bottom: 1rem
      img
        width: 100%
      image[lazy=loading]
        width: 40px
        height: 375px
        margin: auto

  .backTop
    display: inline-block
    width: 70px
    height: 70px
    /*background :rgba(123,134,23,0.5)*/
    position: fixed
    right: 0
    top: 540px
    border-radius: 50%
    background: rgba(123, 134, 23, 0.5) url("./h5_home_tanchu_fanhui.png") no-repeat
    background-size: 100%

</style>

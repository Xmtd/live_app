<template>
  <div>
    <div class="all-pruduct-Wrap">
      <div class="all-header">
        <span>全部产品</span>
      </div>
      <div class="search-wrap">
        <form>
          <input class='input1' :class="{showStyle:isShow}" @click="inputisShow(true)" type="search" placeholder="搜索商品"/>
          <input class="input2" v-show="isShow" @click="isShow=false" type="button" value="取消">
        </form>
      </div>
    </div>
    <scroller>
      <div style="padding-bottom: 130px">
        <div class="life-goodsBox"><!---->
          <div class="life-goodsTip">
            <dl class="life-goodsMark">家务</dl> <!---->
          </div>
          <ul class="life-goodsUl">
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">家务工具</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg">
              <dl data-v-e8e06e10="">家庭清洁剂</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg">
              <dl data-v-e8e06e10="">防霉除菌</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg">
              <dl data-v-e8e06e10="">百纳箱</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg">
              <dl data-v-e8e06e10="">衣物收纳</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg">
              <dl data-v-e8e06e10="">酵素洗衣液</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg">
              <dl data-v-e8e06e10="">魔力挂钩</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg">
              <dl data-v-e8e06e10="">生活必备</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg">
              <dl data-v-e8e06e10="">地毯地垫</dl>
            </li>
          </ul>
        </div>
        <div class="life-goodsBox"><!---->
          <div class="life-goodsTip">
            <dl class="life-goodsMark">下厨</dl> <!---->
          </div>
          <ul class="life-goodsUl">
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>

          </ul>
        </div>
        <div class="life-goodsBox"><!---->
          <div class="life-goodsTip">
            <dl class="life-goodsMark">家居服</dl> <!---->
          </div>
          <ul class="life-goodsUl">
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>


          </ul>
        </div>
        <div class="life-goodsBox"><!---->
          <div class="life-goodsTip">
            <dl class="life-goodsMark">生活</dl> <!---->
          </div>
          <ul class="life-goodsUl">
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
          </ul>
        </div>
        <div class="life-goodsBox"><!---->
          <div class="life-goodsTip">
            <dl class="life-goodsMark">软装</dl> <!---->
          </div>
          <ul class="life-goodsUl">
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg">
              <dl data-v-e8e06e10="">家庭清洁剂</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
          </ul>
        </div>
        <div class="life-goodsBox"><!---->
          <div class="life-goodsTip">
            <dl class="life-goodsMark">床品</dl> <!---->
          </div>
          <ul class="life-goodsUl">
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
          </ul>
        </div>
        <div class="life-goodsBox"><!---->
          <div class="life-goodsTip">
            <dl class="life-goodsMark">工作和旅行</dl> <!---->
          </div>
          <ul class="life-goodsUl">
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
            <li style="height: 138px;">
              <img src="./54079a754099447281e284d45a5c078b.jpg">
              <dl data-v-e8e06e10="">内衣内裤</dl>
            </li>
          </ul>
        </div>
      </div>
    </scroller>



  </div>
</template>

<script>
  export default {
    data () {
      return {
          isShow :false
      }
    },
    methods :{
      inputisShow (isShow) {
          console.log('sdsds')
          this.isShow = isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .all-pruduct-Wrap
    position :fixed
    top :0
    left :0
    width :100%
    height: 96px
    z-index :20
    .all-header
      height :48px
      line-height: 48px
      background-color: rgb(137, 190, 72)
      text-align: center
      color: white
      font-size: 2rem

    .search-wrap
      /*margin-top :48px*/
      text-align center
      width: 100%
      background: #eee
      padding: .5rem 0
      .input1
        outline :none
        border: none
        text-align: center
        font-size: 1.6rem
        width: 352px;
        height: 3rem;
        line-height: 3rem
        border-radius: 6px
        padding-left: 3rem
        background: #fff url("./search.png") no-repeat
        background-position: 38% .5rem
        background-size: auto 70%

        /////////////////////点击后样式//////////////////////////
      .showStyle
        /*width: 88%!important*/
        background-position: .4rem .5rem!important
        text-align: left!important
        width :310px
        margin-left :-3em
      .input2
        background: none
        outline :none
        font-size: 1.5rem
        width: 4
        text-align: center
        margin-right: -4rem
        margin-left: 1rem
        padding: 0
        border: none
        color: #83b842


  .life-goodsBox
    margin-top :96px
    /*height: 1000px*/
    overflow :hidden
    /*background: #eee*/

    .life-goodsTip
      background: #eee
      width: 100%
      padding-top: 2rem
      .life-goodsMark
        margin: 0 auto
        width: 120px
        height: 36px
        text-align: center
        font-size: 1.8rem
        letter-spacing: .2rem

    .life-goodsUl
      width :100%
      li
        float: left;
        width: 33%;
        text-align: center;
        border: 1px solid #f1f1f1;
        margin: 0 0 -1px -1px;
        img
          width :60% !important
          padding-top :1rem
          vertical-align :middle
        dl
          height: 2rem;
          line-height: 2rem;
          padding-bottom: 1rem;
          padding-top: .5rem;
          font-size: 1.3rem


</style>

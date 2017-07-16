<template>
  <div>
    <div class="user-header">
      <span>账户中心</span>
      <a>设置</a>
    </div>
    <scroller>
      <div class="sd" style="padding-bottom :43px">
        <div class="register">
          <div class="no-register">
            <span>您还未登录</span>
          </div>
          <div class="login-register">
            <!--<a href="javascript:;" @click="registerShow=true">登录</a>-->
            <router-link to="/register">登录</router-link>
            <span></span>
            <router-link to="/login">注册</router-link>
            <!--<a href="javascript:;">注册</a>-->
          </div>
        </div>

        <div class="procedure-wrap">
          <ul class="procedure-top">
            <li>
              <span class="sp sp1"></span>
              <a>待支付</a>
            </li>
            <li>
              <span class="sp sp2"></span>
              <a>待发货</a>
            </li>
            <li>
              <span class="sp sp3"></span>
              <a>待收货</a>
            </li>
          </ul>
          <ul class="procedure-bottom">
            <li>
              <span class="sp sp1"></span>
              <a>待评论</a>
            </li>
            <li>
              <span class="sp sp2"></span>
              <a>回复</a>
            </li>
            <li>
              <span class="sp sp3"></span>
              <a>退换货</a>
            </li>
          </ul>
        </div>

        <div class="dashboard">
          <ul class="dashboard-1">
            <li>
              <a>
                <img src="./wodedingdan.png"/>
                <span class="sp1">我的订单</span>
                <span class="sp2"></span>
              </a>
            </li>
          </ul>
          <ul class="dashboard-2">
            <li>
              <a>
                <img src="./youhuiquan.png"/>
                <span class="sp1">我的优惠券</span>
                <span class="sp2"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="./jifen.png"/>
                <span class="sp1">现金积分</span>
                <span class="sp2"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="./fapiao.png"/>
                <span class="sp1">关于发票</span>
                <span class="sp2"></span>
              </a>
            </li>
          </ul>
          <ul class="dashboard-3">
            <li>
              <a>
                <img src="./mimadenglu.png"/>
                <span class="sp1">密码和登录信息</span>
                <span class="sp2"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="./huiyuanjianyi.png"/>
                <span class="sp1">老会员建议</span>
                <span class="sp2"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="./fapiao.png"/>
                <span class="sp1">客户服务</span>
                <span class="sp2"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="./dizhiguanli.png"/>
                <span class="sp1">地址管理</span>
                <span class="sp2"></span>
              </a>
            </li>
            <li>
              <a>
                <img src="./shoujiyanzheng.png"/>
                <span class="sp1">手机验证</span>
                <span class="sp2"></span>
              </a>
            </li>
          </ul>


        </div>
      </div>
    </scroller>



   <!-- <div class="login-page" v-show="true">
      <label></label>
      <div class="register-head"></div>
      <div class="register-main">
        <h1>新用户注册</h1>
        <div class="register-input">
          <form>
            <ul>
              <li>
                <input type="tel" placeholder="请输入手机号"/>
              </li>
              <li>
                <input type="password" placeholder="请设置6-20位密码,包含字母、数字或符号"/>
              </li>
              <li class="li4" >
                <input type="text" placeholder="请输入图形验证码"/>
                <img class="img1" src="http://account.lifevc.com/Account/NewVerifyCode?t=1499757950636" style="width: 20%; border-left: 0px solid silver;">
                <img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlkqvaGAAAAEHRSTlMAv4DvMCBAz3BgnxDfj69Q1PbwmQAAAXZJREFUSMelVe2ChCAIJPGr1Or9n/Y0duWSLdq7+bXJDIzIKtxhNid4kEhxXV3/mvYznKAbrMvmUmAHfsS2irLCRChD+iOMpfFZcOQIFiQsNrpJACeB8Uee+TN/6tlZ8HJaPvEjgBS0YKjB5RRxyGWlAFIY0wXmC0FXbBwwnEAKugJTN1T5K1wI2DRzlqZWBLDVrJ4LRNAEsNa206+y7xl0geslkJcHFKJ057QLz3Mr4H8HbCUm6mmAR8h0WGxUQ6EBQTaqYKM+0RZ0UJ9oz/AQfxHYbwX++wruO8G7ziNYEgSeVQUzzcRC56eCmKTDZwKkWXJ0AejY3jMx0YhoYN78rE+enWTavV4gc7v0v0SkAvwOWOXQkGzwLYXujp/yOyebCjcKeRuXuoD20k/exTgsTREvZgiJPyroCRJw6z7weR8tYAc3LdHFPNtwxAK/+N7QUuYs8qEmxlSRXx9obtoX8z4gm6QcaQnMDsXCE3gfjYmeyP/FD9AJGvpG5XjtAAAAAElFTkSuQmCC" style="width: 5%;">
              </li>
              <li>
                <input type="text" placeholder="请输入手机验证码"/>
                <a href="#">获取验证码</a>
              </li>
            </ul>
            <p>遇到问题？请<a id="p-a" href="#">联系客服</a></p>
            <input type='button' value="注册" class="input input-1">
            <input type='button' value="登录" class="input input-2">
          </form>
        </div>
      </div>
    </div>-->

  </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user-header
    position :fixed
    top :0
    left :0
    width :100%
    height :48px
    line-height :48px
    background-color :rgb(137,190,72)
    text-align :center
    color :white
    font-size :2rem
    z-index :3
    a
      position :absolute
      color :white
      font-size :18px
      right :14px
  .register
    margin-top :48px
    height :108px
    background :url("./background.png") no-repeat
    background-size :100%
    text-align :center
    .no-register
      font-size :1.6rem
      line-height :38px
      color :#222
      text-align :center
    .login-register
      margin-top :0.5rem
      display :inline-block
      width :115px
      height :3rem
      line-height :3rem
      border :1px solid #009c42
      border-radius :1.5rem
      padding :0 10px
      a
        font-size :1.6rem
        display :inline-block
        padding :0 10px
        color :#009c42
      span
        display :inline-block
        width :1px
        height :1.2rem
        background :#009c42
  .procedure-wrap
    width :100%
    height :123px
    .procedure-top
      height :61px
      border-bottom :1px solid #eee
      & li:last-child
         border :none
      li
        float :left
        width :33%
        height :2.5rem
        line-height :2.5rem
        margin-top :1.5rem
        border-right :1px solid #dedede
        text-align :center
        .sp
          display :inline-block
          width :42px
          height :36px
          vertical-align :middle
          margin-left :2px
        .sp1
          background :url("./daizhifu.png") no-repeat
          background-size :100%
          background-position :0 -6px
        .sp2
          background :url("./daifahuo.png") no-repeat
          background-size :100%
          background-position :0 -6px
        .sp3
          background :url("./daishouhuo.png") no-repeat
          background-size :100%
          background-position :0 -6px


    .procedure-bottom
      height :60px
      border-bottom :1px solid #eee
      & li:last-child
        border :none
      li
        float :left
        width :33%
        height :2.5rem
        line-height :2.5rem
        margin-top :1.5rem
        border-right :1px solid #dedede
        text-align :center
        .sp
          display :inline-block
          width :42px
          height :36px
          vertical-align :middle
          margin-left :2px
        .sp1
          background :url("./daipinglun.png") no-repeat
          background-size :100%
          background-position :0 -6px
        .sp2
          background :url("./huifu.png") no-repeat
          background-size :100%
          background-position :-6px -6px
        .sp3
          background :url("./tuihuo.png") no-repeat
          background-size :100%
          background-position :0 -6px


  .dashboard
    .dashboard-1
      height :62px
      padding-bottom :12px
      background :#eee
      li
        height :62px
        line-height :62px
        background :white
        img
          width :2.5rem
          margin :1.3rem 7px 1.3rem 2rem
          vertical-align :middle
        .sp1
          font-size :1.4rem
          color: #585858
        .sp2
          display :inline-block
          vertical-align :middle
          width :10px
          height :10px
          border:2px solid #bbb
          float :right
          margin :2.3rem 1.3rem 1.3rem 0
          transform :rotate(45deg)
          border-bottom :none
          border-left :none
    .dashboard-2
      height :184px
      padding-bottom :12px
      background :#eee
      li
        height :62px
        line-height :62px
        background :white
        img
          width :2.5rem
          margin :1.3rem 7px 1.3rem 2rem
          vertical-align :middle
        .sp1
          font-size :1.4rem
          color: #585858
        .sp2
          display :inline-block
          vertical-align :middle
          width :10px
          height :10px
          border:2px solid #bbb
          float :right
          margin :2.3rem 1.3rem 1.3rem 0
          transform :rotate(45deg)
          border-bottom :none
          border-left :none

    .dashboard-3
      height :306px
      padding-bottom :66px
      background :white
      li
        height :62px
        line-height :62px
        background :white
        img
          width :2.5rem
          margin :1.3rem 7px 1.3rem 2rem
          vertical-align :middle
        .sp1
          font-size :1.4rem
          color: #585858
        .sp2
          display :inline-block
          vertical-align :middle
          width :10px
          height :10px
          border:2px solid #bbb
          float :right
          margin :2.3rem 1.3rem 1.3rem 0
          transform :rotate(45deg)
          border-bottom :none
          border-left :none

  /*.login-page
    position :fixed
    z-index :567
    left :0
    top :0
    bottom :0
    right :0
    !*background :darkcyan*!
    .register-head
      width :100%
      height :141px
      background :white url("./register-head.png") no-repeat
      background-size :120px
      background-position :center
    label
      position :absolute
      display :inline-block
      left: 15px;
      top: 43px;
      width :26px
      height :26px
      border :1px solid green
      border-radius :50%
      &:after
        content :''
        width :14px
        height :14px
        display :block
        border-left: 1px solid #3aad36
        border-top: 1px solid #3aad36
        transform :rotate(-45deg)
        position :absolute
        left :10px
        top :5px
    .register-main
      width :100%
      height :526px
      background :url("./login-big-bg.jpg") no-repeat
      background-size :100%
      h1
        text-align :center
        height :64px
        line-height :76px
        font-size :20px
        color:green
      .register-input
        width :100%
        height :152px
        form
          height :331px
          width :100%
          .input
            display :block
            width :80%
            height :39px
            margin :0 auto
            border-radius :8px
            color :white
            font-size :19px
            text-align :center
            letter-spacing :20px
            text-indent: 20px
          .input-1
            background :#3AAD36
            margin-bottom :15px
            margin-top :5px
          .input-2
            background :#B8B8B8
          p
            font-size :14px
            width :100%
            text-align :center
            margin-top :10px
            #p-a
              font-size :14px
              color: #3ea438;
              text-decoration: underline
          ul
            height :204px
            width :100%
            .li4
              .img1
                position :absolute
                right :36px
                top:13px
              .img2
                position :absolute
                right: 11px;
                top: 18px;
            li
              height :51px
              width :100%
              text-align :center
              position :relative
              &:after
                content :''
                display :inline-block
                width :337.5px
                height :1px
                background :#C0C0C0
                position :absolute
                left: 17px;
                top: 50px;
              input
                width :337.5px
                height :50px
                outline :none
                font-size :16px
                background-color:transparent;
                border :none
              a
                display :inline-block
                text-align :center
                width: 96px
                height: 31px
                line-height :31px
                border :1px solid green
                position :absolute
                top: 8px;
                right: 21px
                border-radius:4px
                font-size :16px
                color :green*/


        /*.quick-login
          width :100%
          height :50px
          position :relative
          a
            display:inline-block
            width :112px
            height :20px
            color :green
            float :right
            font-size :15px
            margin-top :16px
            margin-right :25px
            letter-spacing :1px
          b
            width :8px
            height :8px
            display :inline-block
            border :1px solid green
            position :absolute
            border-left :none
            border-bottom :none
            transform :rotate(45deg)
            right: 18px;
            top: 19px
      .input
        display :block
        width :80%
        height :39px
        margin :0 auto
        border-radius :8px

        color :white
        font-size :19px
        !*text-align :center*!
        letter-spacing :20px
        text-indent: 20px
      .input-1
        background :#3AAD36
        margin-bottom :15px
      .input-2
        background :#B8B8B8*/
</style>


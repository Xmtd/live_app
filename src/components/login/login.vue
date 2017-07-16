<template>
  <div class="login-page">
    <label @click="back"></label>
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
          <router-link to="/register">
            <input type='button' value="登录" class="input input-2">
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods :{
      back () {
        history.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login-page
    position :fixed
    z-index :567
    left :0
    top :0
    bottom :0
    right :0
    /*background :darkcyan*/
    .register-head
      width :100%
      height :141px
      background :white url("../usercenter/register-head.png") no-repeat
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
      background :url("../usercenter/login-big-bg.jpg") no-repeat
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
                color :green
</style>

<template>
  <div class="register-page">
    <label @click="back"></label>
    <div class="register-head"></div>
    <div class="register-main">
      <h1>老用户登录</h1>
      <div class="register-input">
        <form>
          <ul>
            <li>
              <input type="tel" placeholder="请输入手机号"/>
            </li>
            <li>
              <input type="password" placeholder="请输入登录密码"/>
              <a href="#">忘记密码</a>
            </li>
          </ul>
        </form>
        <div class="quick-login">
          <a href="#">
            <span>手机号快捷登录</span>
            <b></b>
          </a>
        </div>
      </div>
      <input type='button' value="登录" class="input input-1">
      <router-link to="/login">
        <input type='button' value="注册" class="input input-2">
      </router-link>
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
  .register-page
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
        height :84px
        line-height :76px
        font-size :20px
      .register-input
        width :100%
        height :152px
        ul
          height :102px
          width :100%
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


        .quick-login
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
        /*text-align :center*/
        letter-spacing :20px
        text-indent: 20px
      .input-1
        background :#3AAD36
        margin-bottom :15px
      .input-2
        background :#B8B8B8
</style>

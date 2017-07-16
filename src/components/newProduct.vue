<template>
<div>
  <live-header></live-header>
  <div class="main"></div>

</div>
</template>

<script>
  import header from './header/header.vue'
    export default {
        data () {
            return {}
        },
      components :{
            'live-header' :header
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    width: 200px
    height: 200px
    background :darkcyan
    margin-top :120px
</style>

<template>
<div>
  <scroller>
    <ul class="s">
      <li v-for="item in list">
        <img v-lazy="item">
      </li>
    </ul>
  </scroller>

</div>
</template>

<script>
  import { Lazyload } from 'mint-ui'
  import Vue from 'vue'

  Vue.use(Lazyload)
  export default {
    data () {
      return {
        list: ['http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/a3628c4600c74cf2b2cce44eff7ffcf7.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/d20af14942824632a588b5253e0123c4.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/4fada1bbc1ef4f1288c123044dc1a69a.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/d0e01200cefd4b658be736f064507fad.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/726881bfc9ad4874a658683a72f4910c.jpg',
          'http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg',
        ],
      lists:[
          'http://i.lifevccdn.com/upload/combinationchart/b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg',

        'http://i.lifevccdn.com/upload/combinationchart/fd21885d82b64d66afdde74fe77af6c8_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/23f7e707201e450c8cb628e283554695_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/cfa2407e57a745bb99916b55f11fb01a_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/fdbd35036c1c485b975a85ff7572708b_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/7f76e379e0cb4847a6d55a65edb341bb_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/5e1e40565e5147a8849f73b630ba0a60_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/1e3cea01343b4608853918c1e9e281de_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/6d9ec06b24ef43a089ec173e9303fa09_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/d38c4504d1ae4d1bac0257b52cef4fdb_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/35f9e6158c1b422b916b3b0a69d156a9_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/69410b3ad32e4f6ea1d49262902b7c59_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/c67db6265fb94762998bf0eb82376249_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/d739449788e544deb9e6e816665f1f6d_d1242x0.jpg',
        'http://i.lifevccdn.com/upload/combinationchart/0a364076e6584d0cba4f1d8717e3da9f_d1242x0.jpg',
        '',
        '',























      ]

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .s
    background :slateblue
    img
      width :375px
      height :375px
  image[lazy=loading]
    width: 40px
    height: 375px
    margin: auto

</style>

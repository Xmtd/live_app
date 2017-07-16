<template>
  <div>
    <nav-bar title="Load More & No Data"></nav-bar>
    <scroller :on-infinite="infinite" ref="my_scroller">
      <div style="height: 44px;"></div>
      <div v-for="(item, index) in items"
           class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>
<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },

    data () {
      return {
        items: []
        lists:[]
      }
    },

    mounted() {
        var data =
      for (let i = 1; i <= 20; i++) {
        this.lists.push(data[i].local)
      }
      this.top = 1
      this.bottom = 20
    },

    methods: {
      infinite(done) {
        if (this.bottom >= 30) {
          setTimeout(() => {
            done(true)
          }, 1500)
          return;
        }

        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start +30; i++) {
            this.items.push(data[i].local)
          }
          this.bottom = this.bottom + 30;
          setTimeout(() => {
            done()
          })
        }, 1500)
      }
    }
  }
</script>

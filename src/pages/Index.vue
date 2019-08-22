<template>
  <div style="height: 100%">
    <mt-header class="header" :title="this.tabHeader.title" fixed :style="{paddingTop:' 5px',zIndex: headerZindex}">
      <router-link v-if="this.tabHeader.leftBtn" to="" slot="left">
        <mt-button @click="goBack" icon="back">{{this.tabHeader.leftBtn}}</mt-button>
      </router-link>
      <router-link v-if="this.tabHeader.rightBtn.url" :to="this.tabHeader.rightBtn.url" slot="right">
        <mt-button>{{this.tabHeader.rightBtn.title}}</mt-button>
      </router-link>
      <mt-button v-else slot="right" @click="chengeStatus">{{this.tabHeader.rightBtn.title}}</mt-button>
    </mt-header>
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      t: 1,
      detail: {
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    chengeStatus () {
      if (this.t) {
        this.$store.state.eventTrigger += 1
      }
      var that = this
      this.t = 0
      setTimeout(() => {
        that.t = 1
      }, 3000)
    }
  },
  mounted () {
    // this.$router.push('./home')
  },
  computed: {
    ...mapState(['tabHeader', 'eventTrigger', 'submitAccess', 'headerZindex'])
  }
}
</script>

<style scoped lang="scss">
  .header{
    background-color:$thmeColorMian;
  }
</style>

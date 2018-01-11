<template lang="html">
    <div id="home">
      <main class="home-content" :class="{'hideSidebar': !sidebar.opened}">
        <div class="main-left">
          <sidebar class="sidebar-container" :sidebarStatus="sidebar.opened"></sidebar>
        </div>
        <div class="main-right">
          <navbar></navbar>
          <div class="main-page">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </main>
    </div>
</template>
<script lang="babel">
  import {mapState} from 'vuex'
  import sidebar from '../sidebar/index.vue'
  import navbar from '../navbar/index.vue'

  export default {
    name: 'home',
    components: {
      sidebar,
      navbar
    },
    data () {
      return {}
    },
    computed: {
      ...mapState([
        'sidebar',
      ]),
    },
  }

</script>
<style lang="scss" scoped="" type="text/css">
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .hideSidebar {
    .main-left {
      width: 64px;
      z-index: 10000;
    }

    .main-right {
      padding-left: 64px;
    }
  }

  .main-left {
    position: fixed;
    width: 202px; /*这里为啥不设置为200是有原因的，
    后面有个.el-submenu .el-menu-item {min-width: 200} 如果这里也是设置200，就会出现边框对不齐的效果，故这里多加了2px*/
    left: 0;
    top: 0;
    bottom: 0;
    transition: all .28s ease-out; /*过渡设置在变化前的元素上面*/
    background-color: #0C2345;
  }

  .main-right {
    padding-left: 202px;
    transition: all .28s ease-out; /*过渡设置在变化前的元素上面*/
  }

  .main-page {
    padding: 20px 50px; /*右边内容展示的padding*/
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>

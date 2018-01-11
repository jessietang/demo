<template lang="html">
    <div id="navbar">
      <el-menu class="navbar" mode="horizontal">
        <div class="hamburger-container">
          <!--父组件向子组件传值，将要传递的值绑定到某个属性，然后到子组件里面去用props接收-->
          <hamburger :isActive="sidebar.opened" @toggleClick="toggleSidebar"></hamburger>
        </div>
        <breadCrumb class="bread-crumb"></breadCrumb>
        <div class="navbar-right-container">
          <el-input
            placeholder=""
            class="search-box"
            prefix-icon="el-icon-search">
          </el-input>
          <el-badge :value="12" class="item message-tip">
            <i class="el-icon-message"></i>
          </el-badge>
          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img class="user-avatar" src="./img/defaultPhoto.png">
              <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
              <router-link  class='inlineBlock' to="/">
                <el-dropdown-item>
                  修改密码
                </el-dropdown-item>
              </router-link>
              <router-link  class='inlineBlock' to="/admin/profile">
                <el-dropdown-item>
                  设置
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided><span style="display:block;">退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </el-menu>
    </div>
</template>
<script lang="babel">
  import {mapState} from 'vuex'
  import hamburger from '../hamburger/index'
  import breadCrumb from '../breadCrumb/index'

  export default {
    name: 'navbar',
    components: {
      hamburger,
      breadCrumb
    },
    data () {
      return {}
    },
    computed: {
      ...mapState([
        'sidebar',
      ])
    },
    methods: {
      toggleSidebar () {
        this.$store.dispatch('toggleSideBar')
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
  .navbar {
    height: 50px;
    line-height: 50px;
  }

  .hamburger-container, .bread-crumb {
    float: left;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
  }

  .navbar-right-container {
    float: right;
    margin-right: 50px;

    .search-box, .message-tip, .avatar-container {
      display: inline-block;
      margin-left: 20px;
    }

    .search-box {
      width: 250px;
    }

    .message-tip {

    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
  }

  .el-badge__content.is-fixed {
    top: 8px;
  }


</style>

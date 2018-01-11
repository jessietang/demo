<template lang="html">
    <div id="sidebar">
      <div class="pro-title"><span v-show="sidebarStatus">四川省道路运输车辆卫星定位系统省级监管平台</span></div>
      <el-menu
        default-active="0-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="!sidebarStatus"
        background-color="#0C2345"
        text-color="#fff"
        active-text-color="#409EFF"><!--collapse控制是否折叠。后三个属性：自定义颜色-->
        <el-submenu index="0">
          <template slot="title"><i class="el-icon-message"></i><span slot="title">统计分析</span></template>
          <router-link :to="{path: '/home/survey'}" :class="{'router-link-active' : $route.path.indexOf('/survey') !== -1}">
            <el-menu-item index="0-1">概况</el-menu-item>
          </router-link>

          <router-link :to="{path: '/home/tide'}" :class="{'router-link-active' : $route.path.indexOf('/tide') !== -1}">
            <el-menu-item index="0-2">出行潮汐分析</el-menu-item>
          </router-link>

          <router-link :to="{path: '/home/colony'}" :class="{'router-link-active' : $route.path.indexOf('/colony') !== -1}">
            <el-menu-item index="0-3">群体事件分析</el-menu-item>
          </router-link>

        </el-submenu>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i><span slot="title">信息管理</span></template>
          <router-link :to="{path: '/home/baseInfo'}" :class="{'router-link-active' : $route.path.indexOf('/baseInfo') !== -1}">
            <el-menu-item index="1-1">基本信息</el-menu-item>
          </router-link>

          <router-link :to="{path: '/home/qualification'}" :class="{'router-link-active' : $route.path.indexOf('/qualification') !== -1}">
            <el-menu-item index="1-2">资质信息</el-menu-item>
          </router-link>

          <router-link :to="{path: '/home/orderInfo'}" :class="{'router-link-active' : $route.path.indexOf('/orderInfo') !== -1}">
            <el-menu-item index="1-3">订单信息</el-menu-item>
          </router-link>

        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i><span slot="title">路由信息对象属性</span></template>
          <router-link :to="{path: '/home/queryTest', query: {name: 'tangjjing',sex: 'female', type: 'human'}}"
                       :class="{'router-link-active' : $route.path.indexOf('/queryTest') !== -1}">
            <el-menu-item index="2-1">query test</el-menu-item>
          </router-link>

          <router-link :to="{path: '/home/paramsTest/0925'}" :class="{'router-link-active' : $route.path.indexOf('/paramsTest') !== -1}">
            <el-menu-item index="2-2">params test</el-menu-item>
          </router-link>

          <router-link :to="{path: '/home/pageRoute'}" :class="{'router-link-active' : $route.path.indexOf('/pageRoute') !== -1}">
            <el-menu-item index="2-3">页面跳转</el-menu-item>
          </router-link>

        </el-submenu>

      </el-menu>
    </div>
</template>
<script lang="babel">
  export default {
    name: 'sidebar',
    data () {
      return {

      }
    },
    props: ['sidebarStatus'],
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

  .pro-title {
    width: 100%;
    text-align: center;
    padding: 20px 5px;
    background-color: #10DA66;
    color: #D2F7E2;
    font-size: 16px;
    box-sizing: border-box;
    height: 82px;
  }

  a {
    text-decoration: none;
  }

  .el-menu {
    border-right: solid 1px #0C2345;
  }

</style>

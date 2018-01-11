<template lang="html">
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in breadList" :key="item.id"  separator="/" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="babel">
  import { storage } from '../../assets/js/common/index'
  import $ from 'n-zepto'
  export default {
    name: 'breadCrumb',
    data() {
      return {
        newBread: {}, // 当前路由
        breadList: [] // 路由集合
      }
    },
    created() {
      this.getBreadcrumb(); // 刷新
    },
    methods: {
      getBreadcrumb() {
        var breadNumber= typeof(this.$route.meta.breadNumber) != "undefined" ? this.$route.meta.breadNumber : 1;//默认为1
        var newBread={name:this.$route.name, path:this.$route.fullPath};//当前页面的
        var breadList=this.$store.getters.breadListState;//获取breadList数组
        breadList.splice(breadNumber,breadList.length-breadNumber,newBread); //(1,1-1,{}) (1, 3-1, {}) (2,1,{}) (3,4-3,{})
        breadList.splice(breadList.length-1, 0, {name:this.$route.meta.pName, path:this.$route.meta.pPath}); // 倒数第二的位置添加当前crumb的parent导航
        var breadList=JSON.stringify(breadList);
        this.$store.commit('breadListMutations',breadList);
        this.breadList=this.$store.getters.breadListState;
      },
      sideActive() {
        $('#sidebar li.el-menu-item').removeClass('is-active').css("color", "#fff");
        $('#sidebar .router-link-active li.el-menu-item').addClass('is-active').css("color","rgb(64, 158, 255)");
        //当前list的父级不关闭
        $('#sidebar .router-link-active').parent('.el-menu').show().parent('.el-submenu').addClass('is-opened');
      }
    },
    watch: {
      $route () {
        this.getBreadcrumb(); // 监测路由改变
        // 路由改变，左边导航的active对象也要改变
        this.sideActive();
      }
    },
    mounted () {
      // 刷新，左边导航的active对象也要改变
      this.sideActive();
    }
  }
</script>
<style>
  .el-breadcrumb {
    line-height: 50px;
  }
</style>

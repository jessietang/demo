import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const login = resolve => require(['../components/login/index'], resolve)
const home = resolve => require(['../components/home/index'], resolve)

//views
const survey = resolve => require(['../views/survey/index'], resolve)
const tide = resolve => require(['../views/tide/index'], resolve)
const colony = resolve => require(['../views/colony/index'], resolve)

const baseInfo = resolve => require(['../views/baseInfo/index'], resolve)
const qualification = resolve => require(['../views/qualification/index'], resolve)
const orderInfo = resolve => require(['../views/orderInfo/index'], resolve)

const queryTest = resolve => require(['../views/queryTest/index'], resolve)
const paramsTest = resolve => require(['../views/paramsTest/index'], resolve)
const pageRoute = resolve => require(['../views/pageRoute/index'], resolve)
const pageRoute1 = resolve => require(['../views/pageRoute1/index'], resolve)
const pageRoute11 = resolve => require(['../views/pageRoute11/index'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        /*=== 说明：breadNumber默认为1，代表第一级页面，其他依次递增 ===*/
        // 统计分析
        {path: '', component: survey, name: '概况', meta:{pName:'统计分析', pPath: '/home/survey'}},
        {path: 'survey', component: survey, name: '概况', meta:{pName:'统计分析', pPath: '/home/survey'}},
        {path: 'tide', component: tide, name: '出行潮汐分析', meta:{pName:'统计分析', pPath: '/home/survey'}},
        {path: 'colony', component: colony, name: '群体事件分析', meta:{pName:'统计分析', pPath: '/home/survey'}},
        // 信息管理
        {path: 'baseInfo', component: baseInfo, name: '基本信息', meta:{pName:'信息管理', pPath: '/home/baseInfo'}},
        {path: 'qualification', component: qualification, name: '资质信息', meta:{pName:'信息管理', pPath: '/home/baseInfo'}},
        {path: 'orderInfo', component: orderInfo, name: '订单信息', meta:{pName:'信息管理', pPath: '/home/baseInfo'}},
        // 路由信息对象
        {path: 'queryTest', component: queryTest, name: 'queryTest', meta:{pName:'路由信息对象属性', pPath: '/home/queryTest'}},
        {path: 'paramsTest/:userId', component: paramsTest, name: 'paramsTest', meta:{pName:'路由信息对象属性', pPath: '/home/queryTest'}},
        {path: 'pageRoute', component: pageRoute, name: '页面跳转', meta:{pName:'路由信息对象属性', pPath: '/home/queryTest'}},
        // page1
        {path: 'pageRoute1', component: pageRoute1, name: 'page1', meta:{breadNumber:2, pName:'页面跳转', pPath: '/home/pageRoute'}},
        // page1-1
        {path: 'pageRoute11', component: pageRoute11, name: 'page11', meta:{breadNumber:3, pName:'page1', pPath: '/home/pageRoute1'}}
      ]
    }
  ]
})

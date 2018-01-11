// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

/*==========导入Element-UI==========*/
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // element-ui更新了，注意引用方式

/*==========引入axios请求==========*/
import axios from 'axios'
window.axios = axios // 可以直接用window.axios，也可以用ajax.js里面封装的

/*==========导入lodash==========*/
import _ from 'lodash'

/*==========导入Moment(javascript日期处理类库)==========*/
import moment from 'moment'

/*==========导入common modules==========*/
import { ajax, test, storage } from './assets/js/common/index'

/*==========导入进度条==========*/
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/*==========导入Echarts.js module (参考：https://github.com/xlsdg/vue-echarts-v3)==========*/
//1.可以加载所有的
//import IECharts from 'vue-echarts-v3/src/full.js'
//2.也可以只加载我们想要的
import IEcharts from 'vue-echarts-v3/src/lite.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'

Vue.use(ElementUi)

Vue.config.productionTip = false

/*==========导入config==========*/
import './assets/js/common/config'

/*==========使用进度条==========*/
NProgress.inc(0.2) // 一个小增量
// 通过 ease(一个 CSS 中的 easing 值) 调整动画设置和速度 speed （毫秒ms）
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 1.设置路由跳转有progress
// 使用 router.beforeEach 注册一个全局的 before 钩子
router.beforeEach((to, from, next) => {
  NProgress.start()
  next() // 确保要调用 next 方法，否则钩子就不会被 resolved
})
// 同样可以注册一个全局的 after 钩子，不过它不像 before 钩子那样，after 钩子没有 next 方法，不能改变导航
router.afterEach(() => {
  NProgress.done()
})
// 2.同样也可是设置ajax请求有进度条，视需而定 （这里有bug，原因还待查询）
/*Vue.http.interceptors.push((request, next) => {
  NProgress.start();

  next((response)=>{
    NProgress.done();
  });
});*/

/* eslint-disable no-new */
const VM = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

export {VM}

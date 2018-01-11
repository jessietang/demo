<template lang="html">
  <div class="survey">
    <h2>vue-echarts-v3</h2>
    <div class="echarts">
      <!--注意这里IEcharts组件 c是小写，找了好久错之前。。。-->
      <IEcharts :option="option" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
      <button @click="doRandom">Random</button>
    </div>
  </div>
</template>
<script lang="babel">
  import IEcharts from 'vue-echarts-v3/src/full.js'
  export default {
    name: 'survey',
    components: {
      IEcharts
    },
    data () {
      return {
        loading: false,
        option: {
          title : {
            text: '某地区蒸发量和降水量',
            subtext: '纯属虚构'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['蒸发量','降水量']
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
              markPoint : {
                data : [
                  {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                  {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name : '平均值'}
                ]
              }
            }
          ]
        }
      }
    },
    methods: {
      doRandom () {
        const that = this;
        let data = [];
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        that.loading = !that.loading;
        that.bar.series[0].data = data;
      },
      onReady(instance) {
        console.log(instance);
      },
      onClick(event, instance, echarts) {
        console.log(arguments);
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
  .echarts {
    width: 800px;
    height: 600px;
  }
</style>

<template lang="html">
  <div class="tide">
    <h2>表格</h2>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="多级表头" name="first">
        <el-table
          :data="tableData1"
          v-loading="loading"
          style="width: 100%"
          @row-click="openDetails()">
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column label="配送信息">
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column label="地址">
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="表格排序" name="second">
        <el-table
          :data="tableData2"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
          >
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="表尾合计行" name="third">
        <!--将show-summary设置为true就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，
        而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可
        以定义自己的合计逻辑。使用summary-method并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的
        各列中，具体可以参考本例中的第二个表格。-->
        <el-table
          :data="tableData3"
          border
          show-summary
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="amount1"
            sortable
            label="数值 1">
          </el-table-column>
          <el-table-column
            prop="amount2"
            sortable
            label="数值 2">
          </el-table-column>
          <el-table-column
            prop="amount3"
            sortable
            label="数值 3">
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="固定列和表头" name="fourth">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="babel">
  import { tableData1, tableData2, tableData3 } from './tableData.js'
  export default {
    name: 'tide',
    data () {
      return {
        activeName: 'first',
        loading: true,
        tableData1: tableData1,
        tableData2: tableData2,
        tableData3: tableData3
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      formatter(row, column) {
        return row.address;
      },
      openDetails(row){
        alert(row.id)
      }
    },
    mounted () {
      var _this = this;
      _this.$nextTick(() => {
        _this.loading = false; // 其实应该是数据加载完成后关闭loading
      })
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
</style>

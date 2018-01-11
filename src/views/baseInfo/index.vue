<template lang="html">
    <div class="baseInfo">
      <h2>下拉菜单和弹出框</h2>
      <el-row class="block-col-2">
        <el-col :span="12">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="12">
          <el-button type="text" @click="dialogVisible = true">open Dialog</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </el-col>

      </el-row>
    </div>
</template>
<script lang="babel">
  export default {
    name: 'baseInfo',
    data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      handleClose () {
        this.$confirm('确认关闭？').then(_ => {
          done();
        }).catch(_ => {})
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
</style>

<template lang="html">
    <div class="colony">
      <h2>Tree树形控件</h2>
      <h2>第一棵树</h2>
      <el-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

      <h2>第二棵数</h2>
      <el-tree
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox
        @check-change="handleCheckChange">
      </el-tree>
    </div>
</template>
<script lang="babel">
  export default {
    name: 'colony',
    data () {
      return {
        data1: [{
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                },
                {
                  label: '三级 1-1-2'
                },
                {
                  label: '三级 1-1-3'
                }
              ]
            },
            {
              label: '二级 1-2',
              children: [{
                label: '三级 1-2-1'
              }]
            },
            {
              label: '二级 1-3',
              children: [{
                label: '三级 1-3-1'
              }]
            }
          ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
</style>

<template lang="html">
    <div class="paramsTest">
      <h2>$route.params</h2>
      <p>类型: Object</p>
      <p>一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。</p>

      <p>userId: {{paramsData.userId}}</p>
    </div>
</template>
<script lang="babel">
  export default {
    name: 'paramsTest',
    data ()
    {
      return {
        paramsData: {}
      }
    },
    created () {
      this.getParams()
    },
    methods: {
      getParams () {
        this.paramsData = this.$route.params
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
</style>

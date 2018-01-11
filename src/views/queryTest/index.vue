<template lang="html">
    <div>
      <h2>$route.query [$route.query： 用来查询ulr里面的参数 [常用]]</h2>
      <p>类型: Object</p>
      <p>一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。</p>
      <p>the query info are:</p>
      <p>name: {{queryData.name}}</p>
      <p>sex: {{queryData.sex}}</p>
      <p>type: {{queryData.type}}</p>
    </div>
</template>
<script lang="babel">
  export default {
    name: 'queryTest',
    data () {
        return {
          queryData : {}
        }
    },
    created () {
      this.getQuery()
    },
    methods: {
      getQuery () {
        this.queryData = this.$route.query
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
</style>

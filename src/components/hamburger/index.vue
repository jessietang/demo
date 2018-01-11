<template lang="html">
  <span class="glyphicon glyphicon-menu-hamburger" :class="{'is-active': isActive}" @click="toggleClick"></span>
</template>
<script lang="babel">
    export default {
      name: 'hamburger',
      data () {
        return {}
      },
      props: ['isActive'],
      methods: {
        toggleClick () {
          this.$emit('toggleClick') // 使用$emit()来触发父组件的自定义事件
        }
      }
    }
</script>
<style lang="scss" scoped="" type="text/css">
  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
  }

  .glyphicon:hover {
    cursor: pointer;
  }

  .glyphicon-menu-hamburger:before {
    /*content: "☰";*/
    content: '\2630';
  }

  .glyphicon.is-active {
    transform: rotate(90deg);
  }
</style>

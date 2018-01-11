<template lang="html">
    <div id="login">
      <button @click="goLogin()">登录</button>
    </div>
</template>
<script lang="babel">
    export default {
      data () {
        return {

        }
      },
      methods: {
        goLogin () {
          this.$router.push({
            path: '/home'
          });
        }
      },
    }
</script>
<style lang="scss" scoped="" type="text/css">

</style>

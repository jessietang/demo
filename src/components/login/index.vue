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
          //发起请求 (使用封装的ajax来发请求)
          /*let sendData = {};
          ajax.post(`api/doLogin`, sendData).then(data => {
              console.log('登录成功');
          }).catch(msg => {
              console.log('登录失败，请稍后再试！');
          });*/
            
          this.$router.push({
            path: '/home'
          });
        }
      },
    }
</script>
<style lang="scss" scoped="" type="text/css">

</style>

<!--
 * @Author: your name
 * @Date: 2020-11-11 21:41:56
 * @LastEditTime: 2020-12-03 21:41:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\App.vue
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>
<script>
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
  export default {
    data() {
      return {
        locale: zhCN,
      };
    },
  };
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.marginRight10{
  margin-right: 10px;
}
.error-color {
  color:#ff4d4f;
}
.success-color{
  color: #52c41a;
}
.error-background {
  background: #ff4d4f;
}
.success-background{
  background: #52c41a!important;
}
</style>

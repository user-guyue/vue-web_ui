<!--
 * @Author: your name
 * @Date: 2020-11-11 21:41:57
 * @LastEditTime: 2020-11-11 23:41:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\views\Home.vue
-->
<template>
  <div id="app">
    <a-form-model
        :model="form"
        :rules="rules"
        @submit="handleSubmit"
        @submit.native.prevent
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
    <a-form-model-item prop="user">
        <a-input v-model="form.user" placeholder="请输入用户名">
        <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
        />
        </a-input>
    </a-form-model-item>
    <a-form-model-item prop="password">
        <a-input
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
        >
        <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
        />
        </a-input>
    </a-form-model-item>
    <a-form-model-item>
        <a-button
        type="primary"
        html-type="submit"
        block
        :disabled="form.user === '' || form.password === ''"
        >
        登录</a-button
        >
    </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 6 },
      form: {
        user: "",
        password: "",
      },
      rules: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.form);
    },
  },
};
</script>
<style lang="less">
.ant-form-item {
  margin-bottom: 14px;
}
</style>

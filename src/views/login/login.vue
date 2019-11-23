<template>
  <div class="login-container">
    <el-form
      ref="loginFormEl"
      :rules="loginRules"
      :model="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          <!-- {{ $t("login.title") }} -->
          login.title
        </h3>
        <lang-select class="set-language" />
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon name="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item>
        <span class="svg-container">
          <svg-icon name="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          :type="passwordType"
          ref="password"
          name="password"
          auto-complete="on"
          @keyup.native="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd">
          <svg-icon :name="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
    </el-form>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { isvalidUsername } from '@/utils/validate';
import { LangSelect } from '@/components';

const validateUsername = (rule, value: string, callback) => {
  if (!isvalidUsername(value)) {
    callback(new Error('Please enter the correct user name'));
  } else {
    callback();
  }
};
const validatePassword = (rule, value: string, callback) => {
  if (value.length < 6) {
    callback(new Error('The password can not be less than 6 digits'));
  } else {
    callback();
  }
};

@Component({
  components: { LangSelect }
})
export default class Login extends Vue {
  private loginForm = {
    username: 'admin',
    password: '1111111'
  };

  private loginRules = {
    username: [
      { required: true, trigger: 'blur', validator: validateUsername }
    ],
    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
  };

  private passwordType: string = 'password';
  private capsTooltip: boolean = false;

  private handleLogin(): void {
    console.log('dologin');
    console.log(this);
    this.$store.dispatch('login', { username: 'johnson', password: 'abc123' });
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import './style.less';
</style>

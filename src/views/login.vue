<template>
  <div class="login">
    <el-form
      ref="loginFormEl"
      :model="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <el-form-item>
        <el-input
          ref="username"
          v-model="loginForm.username"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item>
        <el-input
          v-model="loginForm.password"
          ref="password"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
    </el-form>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private loginForm = {
    username: 'admin',
    password: '1111111'
  };

  private handleLogin(): void {
    console.log('dologin');
    console.log(this);
    this.$store.dispatch('login', { username: 'johnson', password: 'abc123' });
  }
}
</script>

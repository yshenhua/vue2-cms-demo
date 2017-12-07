<template>
  <section class="login-container">
    <el-form :model="loginForm" ref="form" :rules="rules">
      <el-form-item>
        <h2 class="title">用 户 登 录</h2>
      </el-form-item>
      <el-form-item prop="account">
        <el-input v-model="loginForm.account" type="text" placeholder="请输入您的账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入您的密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signIn">登 录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{ required: true, message: '请输入您的账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入您的密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    signIn () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // const redirect = this.$route.query.redirect || '/'
          // this.$router.push({ path: redirect })
          const loginInfo = {
            account: this.loginForm.account,
            password: this.loginForm.password
          }
          this.$store.dispatch('fetchLoginInfo', loginInfo)
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100%;
    background-color: $bg-color;
    .el-form {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      width: 350px;
      border: 1px solid $border-color;
      padding: 35px 20px;
      background-color: #fff;
      @include border-shadow;
      h2.title {
        margin: 0;
        font-size: 21px;
        font-weight: normal;
        text-align: center;
        color: $font-color;
      }
      .el-button {
        width: 100%;
      }
    }
  }
</style>

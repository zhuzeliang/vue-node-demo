<template>
  <div class="login-page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form-contianer" v-show="showLogin">
        <div class="manage-tip">
          <p>node+vue完整CURD</p>
        </div>
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item prop="user">
            <el-input v-model="form.user" placeholder="用户名"><span>dsfsf</span></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" placeholder="密码" v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')" class="submit-btn">注册登录</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示：新用户自动注册登录，老用户按账号密码登录</p>
      </section>
    </transition>
  </div>
</template>
<script>
import { loginRegister } from '@/api/getData'

export default {
  data() {
    return {
      form: {
        user: '',
        pwd: '',
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      showLogin: false,
    }
  },
  mounted() {
    this.showLogin = true;

  },
  computed: {

  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          const res = await loginRegister(this.form)
          if (res.data.code == 0) {
            this.$message.success('登录成功');
            localStorage.setItem("token", res.data.data.token);
            let redirect = decodeURIComponent(this.$route.query.redirect || '/home');
            this.$router.push({ //你需要接受路由的参数再跳转
              path: redirect
            });
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            });
          }
        } else {
          this.$message.success('请输入正确的用户名密码');
          return false;
        }
      });
    },
  }
}

</script>
<style lang="scss" scoped>
.login-page {
  background-color: #324057;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.manage-tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}

.form-contianer {
  width: 320px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -125px;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit-btn {
    width: 100%;
    font-size: 16px;
  }
}

.tip {
  font-size: 12px;
  color: red;
  text-align: left;
  line-height: 1.68;
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}

.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}

</style>

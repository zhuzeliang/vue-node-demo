<template>
  <div class="channel-add">
    <div class="z-bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">渠道管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加渠道</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="z-line"></div>
    <div class="form-add">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="渠道名称：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="渠道类型：" prop="region">
          <el-select v-model="form.region" placeholder="请选择渠道类型">
            <el-option label="Web" value="Web"></el-option>
            <el-option label="微信" value="微信"></el-option>
            <el-option label="App" value="App"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道说明：">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <div class="z-module z-select">
          <div class="z-module-t">链接地址：</div>
          <div style="margin-top: 15px;">
            <el-input v-model="form.mm" class="input-with-select">
              <el-select v-model="form.select" slot="prepend" placeholder="请选择">
                <el-option label="http://" value="1"></el-option>
                <el-option label="https://" value="2"></el-option>
              </el-select>
              <el-button slot="append">复制</el-button>
            </el-input>
          </div>
        </div>
        <div class="z-module">
          <div class="z-module-t">嵌入代码</div>
          <el-form-item label="浏览轨迹：">
            <el-radio-group v-model="form.flag">
              <el-radio label="1">开启</el-radio>
              <el-radio label="0">关闭</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-show="form.flag == 0 ? false : true">
            <div class="code-box">
              <h4 class="code-t">将此代码嵌入到你网站页面</body>标签之前即可启用Any800：</h4>
              <div class="copy-text" ref="copyText">
                &lt;!--Any800 start--&gt; &lt;script id="uccKefu" language="javascript" type="text/javascript" src="https://www.any800.com/any800/echatManager.do?companyPk=2c9080885c5f009c015c5f1ef633041c&codeKey=5"&gt;&lt;/script&gt; &lt;--Any800 end--&gt;
              </div>
            </div>
            <div style="text-align:right">
              <el-button type="primary" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</el-button>
            </div>
          </div>
        </div>
        <el-form-item>
          <el-button type="primary">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      form: {
        name: '',
        region: '',
        desc: '',
        mm: '',
        select: '',
        radio: '1',
        flag: '0',
        resource: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入渠道名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择渠道类型', trigger: 'change' }
        ]
      }
    }
  },
  created() {

  },
  computed: {

  },
  mounted() {
    //复制内容
    this.message = this.$refs.copyText.innerText;
  },
  methods: {
    onCopy: function(e) {
      this.$message({
        message: '恭喜你，成功复制文本信息',
        type: 'success'
      });
    },
    onError: function(e) {
      this.$message.error('对不起，无法复制文本信息');
    }
  }

}

</script>
<style lang="scss" scope>
@import "../style/mixin";
.z-line {
  height: 1px;
  width: 100%;
  background: #eee;
}

.form-add {
  width: 600px;
  margin-top: 20px;
  .z-select .el-select .el-input {
    width: 130px;
  }
  .z-select {
    .el-input__inner {
      background: #d9d9d9;
    }
  }
  .z-module {
    margin-top: 50px;
    .z-module-t {
      border-bottom: 1px solid $border-color;
      line-height: 48px;
      height: 48px;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
}

.code-box {
  background: #d9d9d9;
  padding: 15px;
  .code-t {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 10px;
  }
}

</style>

<template>
  <div class="viewMobile">
    <div class="z-bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">渠道管理</el-breadcrumb-item>
        <el-breadcrumb-item>手机窗口外观</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="z-line"></div>
    <div class="clearfix">
      <div class="view">
        <div class="view-content">
          <h3 class="view-t">UCC全渠道智慧互动</h3>
          <div class="msg-list">
            <div class="msg-server msg">
              <img :src="serverImg" class="head">
              <div class="server">
                你好，请问有什么可以帮助你的？
              </div>
            </div>
            <div class="msg-client msg">
              <img :src="clientImg" class="head">
              <div class="client">
                想了解你们公司的产品
              </div>
            </div>
            <div class="msg-server msg">
              <img :src="serverImg" class="head">
              <div class="server">
                想了解我们公司的哪款产品呢？要不要我给你详细的介绍下。我们有三款产品。
              </div>
            </div>
            <div class="msg-server msg">
              <img :src="iImg" class="head">
              <div class="server">
                你好，我是机器人小i
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-form">
        <el-form :model="form" ref="form" label-width="120px">
          <el-form-item label="对话窗口名称：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="气泡样式：">
            <el-color-picker v-model="form.color"></el-color-picker>
          </el-form-item>
          <el-form-item label="背景图片：">
            <el-upload class="upload-demo" name="bj" :multiple="true" :file-list="fileList" ref="upload" action="/api/upload" :limit="1" :on-change="handlePreview" :on-remove="handleRemove" :data="dataJson" :auto-upload="false" :on-success="success">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="坐席图标：">
            <el-upload class="upload-demo" name="zx" :multiple="true" :file-list="fileList" ref="upload" action="/api/upload" :on-preview="handlePreview" :limit="1" :on-remove="handleRemove" :data="dataJson" :auto-upload="false" :on-success="success">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="访客图标：">
            <el-upload class="upload-demo" name="zx" :multiple="true" :file-list="fileList" ref="upload" action="/api/upload" :on-preview="handlePreview" :limit="1" :on-remove="handleRemove" :data="dataJson" :auto-upload="false" :on-success="success">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="机器人图标：">
            <el-upload class="upload-demo" name="zx" :multiple="true" :file-list="fileList" ref="upload" action="/api/upload" :on-preview="handlePreview" :limit="1" :on-remove="handleRemove" :data="dataJson" :auto-upload="false" :on-success="success">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitUpload">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serverImg: require('../assets/img/server.png'),
      clientImg: require('../assets/img/client.png'),
      iImg: require('../assets/img/i.png'),
      fileList: [],
      message: '',
      dataJson: {
        a: 1
      },
      form: {
        name: '',
        color: '#409EFF',
        region: '',
        desc: '',
        mm: '',
        select: '',
        radio: '1',
        flag: '0',
        resource: ''
      }
    }
  },
  created() {

  },
  computed: {

  },
  mounted() {

  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
      
    },
    handleRemove(file, fileList) {
      this.serverImg = require('../assets/img/server.png');
    },
    success(response, file, fileList) {
      console.log(response);
    },
    handlePreview(file) {
      this.serverImg = file.url;
    }
  }

}

</script>
<style lang="scss" scope>
@import "../style/mixin";
.view {
  width: 257px;
  height: 351px;
  background: url(../assets/img/iphone.png) no-repeat center center;
  bakcgroun-size: 100% 100%;
  padding: 120px 100px;
  font-size: 14px;
  float: left;
  .view-content {
    position: relative;
    padding-bottom: 150px;
    line-height: 1.3;
    .view-t {
      @include ellipsis;
      position: absolute;
      top: -60px;
      z-index: 100;
      left: 0;
      right: 0;
      color: #fff;
      width: 180px;
      margin: 0 auto;
      font-size: 14px;
      font-weight: normal;
      text-align: center;
    }
  }
  .msg-list {
    margin-top: 30px;
  }
  .msg {
    @include clearfix;
    line-height: 1.2;
    margin-bottom: 15px;
    text-align: justify;
  }
  .msg-server {
    @include clearfix;
    padding-right: 50px;
    .head {
      float: left;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
    }
    .server {
      margin-left: 37px;
      background: red;
      border-radius: 5px;
      position: relative;
      padding: 5px;
      &:after {
        content: "\200B";
        display: block;
        position: absolute;
        left: -7px;
        top: 0;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-left: 7px solid transparent;
        border-bottom: 7px solid red;
      }
    }
  }
  .msg-client {
    padding-left: 50px;
    .head {
      float: right;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
    }
    .client {
      padding: 5px;
      float: right;
      background: red;
      border-radius: 5px;
      background: red;
      border-radius: 5px;
      margin-right: 8px;
      position: relative;
      &:after {
        content: "\200B";
        display: block;
        position: absolute;
        right: -7px;
        top: 0;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid red;
      }
    }
  }
}

.view-form {
  float: left;
}

</style>

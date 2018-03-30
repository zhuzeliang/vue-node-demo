<template>
  <div class="viewPc">
    <div class="z-bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">渠道管理</el-breadcrumb-item>
        <el-breadcrumb-item>手机窗口外观</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="view-pc">
      <div class="view-t">
        <div class="view-shade">
          <div class="edit">
            <i class="el-icon-edit"></i>
            <span>点击进入编辑</span>
          </div>
        </div>
        <div class="logo-img">
          <img src="../assets/img/any.png">
        </div>
        <div class="logo-title">全渠道营销服务平台</div>
      </div>
      <el-row>
        <el-col :span="16">
          <div class="view-info">
            <div class="view-shade">
              <div class="edit">
                <i class="el-icon-edit"></i>
                <span>点击进入编辑</span>
              </div>
            </div>
            <div class="server info-item">
              <div class="head">
                <img :src="serverImg">
              </div>
              <div class="server-m">
                <div class="server-m-m">客服1</div>
                <div class="server-m-i">你好，请问有什么可以帮助你的？</div>
              </div>
            </div>
            <div class="client info-item">
              <div class="head">
                <img :src="clientImg">
              </div>
              <div class="client-m">
                <div class="client-m-m">客服1</div>
                <div class="client-m-i">你好，请问有什么可以帮助你的？</div>
              </div>
            </div>
            <div class="server info-item">
              <div class="head">
                <img :src="serverImg">
              </div>
              <div class="server-m">
                <div class="server-m-m">客服1</div>
                <div class="server-m-i">想了解我们公司的哪款产品呢？要不要我给你详细的介绍下。我们有三款产品。</div>
              </div>
            </div>
            <div class="client info-item">
              <div class="head">
                <img :src="clientImg">
              </div>
              <div class="client-m">
                <div class="client-m-m">客服1</div>
                <div class="client-m-i">你好，请问有什么可以帮助你的？</div>
              </div>
            </div>
            <div class="server info-item">
              <div class="head">
                <img :src="iImg">
              </div>
              <div class="server-m">
                <div class="server-m-m">机器人</div>
                <div class="server-m-i">想了解我们公司的哪款产品呢？要不要我给你详细的介绍下。我们有三款产品。</div>
              </div>
            </div>
          </div>
          <div class="view-editor">
            <div class="view-shade">
              <div class="edit">
                <i class="el-icon-edit"></i>
                <span>点击进入编辑</span>
              </div>
            </div>
            <span>f</span>
            <span>q</span>
          </div>
          <div class="view-input">
            好的！
          </div>
        </el-col>
        <el-col :span="8">
          <div class="view-tab clearfix">
            <div class="tab">常见问题</div>
            <div class="tab active">简介</div>
          </div>
          <div class="slide">
          	<div class="view-shade">
              <div class="edit">
                <i class="el-icon-edit"></i>
                <span>点击进入编辑</span>
              </div>
            </div>
            <el-carousel indicator-position="none" height="440px" arrow="never">
              <el-carousel-item v-for="item in 4" :key="item">
                <div style="width:100%;">
                  <img src="../assets/img/banner.png" alt="" style="width:100%;height:440px;display:block;">
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
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

  }

}

</script>
<style lang="scss" scope>
@import "../style/mixin";
.view-pc {
  .view-shade {
    cursor: pointer;
    transition: all .5s ease-in-out;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(153, 153, 152, .6);
    z-index: 10;
    .edit {
      text-align: center;
      position: absolute;
      height: 30px;
      line-height: 30px;
      top: 50%;
      left: 0;
      right: 0;
      margin-top: -15px;
      i {
        color: #fff;
        font-size: 18px;
      }
      span {
        color: $main-color;
        font-size: 18px;
      }
    }
  }
  .view-t {
    overflow: hidden;
    background: #f9f9f9;
    padding:0 20px;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    position: relative;
    &:hover {
      .view-shade {
        opacity: 1;
      }
    }
    .logo-img {
      float: left;
      margin-right: 20px;
      display: block;
    }
    .logo-title {
      float: left;
      font-size: 16px;
    }
  }
  .view-info {
    position: relative;
    text-align: justify;
    padding: 20px;
    &:hover {
      .view-shade {
        opacity: 1;
      }
    }
    .info-item {
      @include clearfix;
      margin-top: 20px;
    }
    .server {
      padding-right: 50px;
      .head {
        float: left;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: block;
        }
      }
      .server-m {
        margin-left: 50px;
        .server-m-m {
          font-size: 12px;
          color: $sub-font-color;
        }
        .server-m-i {
          display: inline-block;
          border-radius: 5px;
          background: red;
          padding: 3px;
          position: relative;
          margin-top: 6px;
          &:after {
            content: "\200B";
            display: block;
            position: absolute;
            left: -7px;
            top: 5px;
            width: 0;
            height: 0;
            border-top: 7px solid red;
            border-left: 7px solid transparent;
            border-bottom: 7px solid transparent;
          }
        }
      }
    }
    .client {
      padding-left: 50px;
      @include clearfix;
      .head {
        float: right;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: block;
        }
      }
      .client-m {
        float: right;
        margin-right: 10px;
        .client-m-m {
          text-align: right;
          font-size: 12px;
          color: $sub-font-color;
        }
        .client-m-i {
          display: inline-block;
          border-radius: 5px;
          background: red;
          padding: 3px;
          position: relative;
          margin-top: 6px;
          &:after {
            content: "\200B";
            display: block;
            position: absolute;
            right: -7px;
            top: 5px;
            width: 0;
            height: 0;
            border-top: 7px solid red;
            border-right: 7px solid transparent;
            border-bottom: 7px solid transparent;
          }
        }
      }
    }
  }
  .view-editor {
    height: 40px;
    line-height: 40px;
    background: #edefee;
    padding: 0 20px;
    position: relative;
    &:hover {
      .view-shade {
        opacity: 1;
      }
    }
  }
  .view-input {
    padding: 10px 20px;
    height: 45px;
  }
  .view-tab {
    background: #edefee;
    .tab {
      height: 30px;
      line-height: 30px;
      float: left;
      width: 80px;
      margin-top: 10px;
      text-align: center;
      &.active {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background: #fff;
      }
    }
  }
  .slide{
  	position: relative;
  	&:hover {
      .view-shade {
        opacity: 1;
      }
    }
  }
}

</style>

<template>
  <div class="channel-manage">
    <div class="add-box">
      <el-button type="primary" @click="channelAdd"><i class="el-icon-plus"></i>&nbsp;&nbsp;添加渠道</el-button>
    </div>
    <div class="channel-list clearfix">
      <div class="channel">
        <div class="channel-t">
          <div class="channel-t-name">
            渠道名称：Any800
          </div>
          <div class="channel-t-handle">
            <span class="c-btn">
        <img src="../assets/img/code.png" />
      </span>
            <span class="c-btn">
        <img src="../assets/img/view.png" />
      </span>
            <span class="c-btn">
          <img src="../assets/img/edit.png" />
        </span>
            <span class="c-btn">
          <img src="../assets/img/cancel.png" />
        </span>
          </div>
        </div>
        <div class="channel-b">
          <div class="channel-cell">
            <div class="z-label">渠道类型：</div>
            <div class="z-detail">Web</div>
          </div>
          <div class="channel-cell">
            <div class="z-label">渠道说明：</div>
            <div class="z-detail">官网</div>
          </div>
          <div class="channel-cell">
            <div class="z-label">链接：</div>
            <div class="z-detail">Web</div>
          </div>
        </div>
        <div class="channel-m">
          <div class="channel-tips">
            添加成功，需要进行入口参数设置，否则链接无法使用。
          </div>
          <div class="channel-set">
            <span class="set" @click="dialogVisible = true">外观配置</span>
            <router-link to="/channelMsg" class="set">参数配置</router-link>
          </div>
        </div>
      </div>
      <div class="channel">
        <div class="channel-t">
          <div class="channel-t-name">
            渠道名称：Any800
          </div>
          <div class="channel-t-handle">
            <span class="c-btn">
          <img src="../assets/img/code.png" >
        </span>
            <span class="c-btn">
          <img src="../assets/img/view.png" >
        </span>
            <span class="c-btn">
          <img src="../assets/img/edit.png" >
        </span>
            <span class="c-btn">
          <img src="../assets/img/cancel.png" >
        </span>
          </div>
        </div>
        <div class="channel-b">
          <div class="channel-cell">
            <div class="z-label">渠道类型：</div>
            <div class="z-detail">Web</div>
          </div>
          <div class="channel-cell">
            <div class="z-label">渠道说明：</div>
            <div class="z-detail">官网</div>
          </div>
          <div class="channel-cell">
            <div class="z-label">链接：</div>
            <div class="z-detail">Web</div>
          </div>
        </div>
        <div class="channel-m">
          <div class="channel-tips">
            添加成功，需要进行入口参数设置，否则链接无法使用。
          </div>
          <div class="channel-set">
            <span class="set">外观配置</span>
            <span class="set">参数配置</span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="外观配置" :visible.sync="dialogVisible" append-to-body :before-close="handleClose">
      <el-radio-group v-model="pcMobile">
        <el-radio label="1">进入PC外观配置</el-radio>
        <el-radio label="0">进入移动外观配置</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="viewLink">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      menuWidth: '64px',
      dialogVisible: false,
      pcMobile: '0'
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.menuWidth = '64px';
      } else {
        this.menuWidth = '150px';
      }
    },
    channelAdd() {
      this.$router.push({ path: 'channelAdd' });
    },
    viewLink() {
      if (this.pcMobile == '0') {
        this.$router.push({ path: 'viewMobile' });
      }
      else {
        this.$router.push({ path: 'viewPc' });
      }
    }
  }

}

</script>
<style lang="scss" scope>
@import "../style/mixin";
.add-box {
  margin-top: 20px;
}

.channel {
  width: 490px;
  float: left;
  border-radius: 5px;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin-right: 20px;
  margin-top: 20px;
  .channel-t {
    @include clearfix;
    border-bottom: 1px solid #eee;
    padding: 15px;
    .channel-t-name {
      float: left;
    }
    .channel-t-handle {
      float: right;
      .c-btn {
        margin-left: 10px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        img {
          height: 16px;
        }
      }
    }
  }
  .channel-b {
    padding: 15px;
    .channel-cell {
      @include clearfix;
      margin-top: 10px;
      &:first-child {
        margin-top: 0;
      }
      .z-label {
        float: left;
        width: 80px;
        margin-right: 10px;
      }
      .z-detail {
        margin-left: 90px;
      }
    }
  }
  .channel-m {
    @include clearfix;
    padding: 0 15px;
    line-height: 48px;
    .channel-tips {
      font-size: 12px;
      color: $sub-font-color;
      float: left;
    }
    .channel-set {
      float: right;
      .set {
        margin-left: 10px;
        color: $main-color;
        cursor: pointer;
      }
    }
  }
}

</style>

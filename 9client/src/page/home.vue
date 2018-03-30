<template>
  <div class="full-container">
    <head-top></head-top>
    <div class="manage">
      <div class="left-menu" :style="{width:menuWidth}">
        <div class="more-box" @click="change">
          <img src="../assets/img/more.png">
        </div>
        <router-link to="/" exact class="left-menu-item">
          <img src="../assets/img/manage.png" class="me-icon" />
          <span v-if="!isCollapse">渠道管理</span>
        </router-link>
      </div>
      <div class="right-content" :style="{marginLeft:menuWidth}">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import headTop from '@/components/headTop'


export default {
  data() {
    return {
      isCollapse: true,
      menuWidth: '60px'
    }
  },
  components: {
    headTop
  },
  computed: {
    defaultActive: function() {
      
    }
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
        this.menuWidth = '60px';
      } else {
        this.menuWidth = '150px';
      }
    }
  }

}

</script>
<style lang="scss" scope>
@import "../style/mixin";
.manage {
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  .left-menu {
    float: left;
    background: #2d3849;
    height: 100%;
    overflow-y: auto;
    transition: all 0.3s ease-in;
    .more-box {
      text-align: center;
      padding: 15px 20px;
      cursor: pointer;
    }
    .left-menu-item {
      white-space: nowrap;
      overflow: hidden;
      color: #fff;
      font-size: 14px;
      display: block;
      padding: 15px 20px;
      &.link-active {
        background: #404f69;
      }
      .me-icon {
        vertical-align: middle;
        magrin-top: -2px;
        margin-bottom: 1px;
        magrin-right: 10px;
      }
    }
    .me-icon {
      margin-right: 10px;
    }
  }
  .right-content {
    transition: all 0.3s ease-in;
    padding:0 20px;
    height:100%;
    overflow-y: auto;
  }
}

</style>

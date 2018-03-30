<template>
  <div class="channel-msg">
    <div class="z-bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">渠道管理</el-breadcrumb-item>
        <el-breadcrumb-item>接入对话设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="active" type="card">
      <el-tab-pane label="机器人设置" name="first">
        <div class="form1 z-form">
          <el-form :model="form1" ref="form1" label-width="230px">
            <el-form-item label="机器人：">
              <el-radio-group v-model="form1.flag1">
                <el-radio label="1">开启</el-radio>
                <el-radio label="0">关闭</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否启用机器人智能补全提问：">
              <el-radio-group v-model="form1.flag2">
                <el-radio label="1">开启</el-radio>
                <el-radio label="0">关闭</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="机器人提示语：">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="机器人无法回答提示语：">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="无法回答转人工次数：">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="直接转人工话术：">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="基本设置" name="second">
        <div class="form2">
          <div class="form1 z-form">
            <el-form :model="form2" ref="form1" label-width="160px">
              <el-form-item label="指定业务类型接入：">
                <el-input v-model="form2.name"></el-input>
              </el-form-item>
              <el-form-item label="指定业务类型接入：">
                <div class="tree-select">
                  <input type="text" class="tree-input" @click.stop="treeShowFun" v-model="treeInfo">
                  <el-tree :data="data2" show-checkbox node-key="id" @check="handleCheckChange" class="tree-view" v-show="treeShow" @click.stop()>
                  </el-tree>
                </div>
              </el-form-item>
              <el-form-item label="收集访客信息：">
                <el-radio-group v-model="form2.flag1">
                  <el-radio label="1">开启</el-radio>
                  <el-radio label="0">关闭</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="坐席工作时间：">
                <el-radio-group v-model="form2.flag2">
                  <el-radio label="1">开启</el-radio>
                  <el-radio label="0">关闭</el-radio>
                </el-radio-group>
                <div class="except-list">
                  <div class="except">
                    <label class="z-label">正常情况：</label>
                    <el-select v-model="form2.region" placeholder="请选择渠道类型">
                      <el-option label="星期一" value="星期一"></el-option>
                      <el-option label="星期二" value="星期二"></el-option>
                    </el-select>
                    <el-time-picker is-range v-model="form2.value2" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                    </el-time-picker>
                    <el-button type="primary" @click="exceptAdd">添加例外</el-button>
                  </div>
                  <div class="except" v-for="(item,i) in form2.except">
                    <label class="z-label">例外情况：</label>
                    <el-date-picker v-model="item.timeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                    <el-radio-group v-model="item.flagValue">
                      <el-radio label="1">工作日</el-radio>
                      <el-radio label="0">节假日</el-radio>
                    </el-radio-group>
                    <el-button type="primary" @click="exceptRemove(i)">删除</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="满意度调查：">
                <el-cascader :options="form2.options" change-on-select></el-cascader>
                <div class="over">
                  <el-radio-group v-model="form2.flag3">
                    <el-radio label="1">对话结束自动推送满意度调查</el-radio>
                    <el-radio label="0">对话结束不推送满意度调查</el-radio>
                  </el-radio-group>
                </div>
              </el-form-item>
              <el-form-item label="插播广告：">
                <el-radio-group v-model="form2.flag1">
                  <el-radio label="1">开启</el-radio>
                  <el-radio label="0">关闭</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="留言设置" name="third">留言设置</el-tab-pane>
      <el-tab-pane label="提示设置" name="fourth">
        <div class="card-box clearfix">
          <div class="cart-list">
            <div class="cart" v-for="(card, i) in cards" @click="tipsChange(card)">
              {{card.label}}
            </div>
          </div>
          <div class="edit-container">
            <quill-editor ref="myQuillEditor" v-model="content" :options="editorOption" @change="onEditorChange($event)">
            </quill-editor>
          </div>
        </div>
        <div class="submit-box">
          <el-button type="primary" @click="submit">保存</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  data() {
    return {
      i: '0',
      cards: [{
          id: '1',
          label: '对话接入中',
          value: '对话接入中，请等待！'
        },
        {
          id: '2',
          label: '对话开始提示语',
          value: '您与客服的对话已开始，请输入您的问题。！'
        }, {
          id: '3',
          label: '欢迎语1',
          value: '您好！欢迎使用在线客服系统，很高兴为您服务！'
        }, {
          id: '4',
          label: '欢迎语2',
          value: '如果客服忙或者客服不在线，请选择在线留言'
        }, {
          id: '5',
          label: '排队第一位提示语',
          value: '您当前排在排队队列首位，请耐心等待，客服马上为您服务!'
        }, {
          id: '6',
          label: '对话开始提示语',
          value: '对话接入中，请等待！'
        }
      ],
      content: "对话接入中，请等待！",
      editorOption: {
        // some quill options
      },
      active: 'first',
      treeShow: false,
      treeInfo: '',
      data2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      form1: {
        name: '欢迎使用留言提示语',
        region: '',
        desc: '',
        mm: '',
        select: '',
        radio: '1',
        flag1: '0',
        flag2: '0',
        resource: ''
      },
      form2: {
        name: '欢迎使用留言提示语',
        region: '',
        desc: '',
        mm: '',
        select: '',
        radio: '1',
        flag1: '0',
        flag2: '0',
        flag3: '0',
        resource: '',
        except: '',
        value2: [new Date(), new Date()],
        value6: '',
        except: [

        ],
        options: [{
          value: '1',
          label: '满意度方案1',
          children: [{
            value: 'shejiyuanze',
            disabled: true,
            label: '满意',
          }, {
            value: 'daohang',
            disabled: true,
            label: '一般',
          }, {
            value: 'daohang',
            disabled: true,
            label: '不满意',
          }]
        }, {
          value: '2',
          label: '好评方案2',
          children: [{
            value: 'shejiyuanze',
            disabled: true,
            label: '好评',
          }, {
            value: 'daohang',
            disabled: true,
            label: '中评',
          }, {
            value: 'daohang',
            disabled: true,
            label: '差评',
          }]
        }]
      },
    };
  },
  components: {
    quillEditor,
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    //树形点击body消失
    let bodyDom = document.querySelector('body');
    let _this = this;
    bodyDom.addEventListener("click", function() {
      _this.treeShow = false;
    });
  },
  methods: {
    treeShowFun() {
      this.treeShow = !this.treeShow;
    },
    handleCheckChange(cur, data) {
      let dataArr = data.checkedNodes;
      let viewArr = [];
      dataArr.forEach(function(item, i) {
        viewArr.push(item.label);
      });
      console.log(viewArr.toString());
      this.treeInfo = viewArr.toString();
    },
    exceptAdd() {
      this.form2.except.push({ timeValue: '', flagValue: '0' });
    },
    exceptRemove(i) {
      this.form2.except.splice(i, 1);
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html;
      
    },
    tipsChange(card) {
      this.content = card.value;
    },
    submit() {
      console.log(this.editor);
    }
  }
}

</script>
<style lang="scss" scope>
@import "../style/mixin";
.channel-msg {
  .z-form {
    .el-input__inner {
      width: 240px;
    }
  }
  .except {
    margin-top: 15px;
  }
  .over {
    margin-top: 15px;
  }
  .tree-select {
    position: relative;
    width: 240px;
    .tree-view {
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
      right: 0;
      z-index: 100;
      -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .tree-input {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
    }
  }
  .z-label {
    color: $sub-font-color;
    font-size: 14px;
  }
}

.edit-container {
  float: left;
  width: 620px;
  .ql-container {
    height: 300px;
  }
}

.cart-list {
  width: 300px;
  float: left;
  margin-right: 20px;
  border: 1px solid #eee;
  .cart {
    font-size: 14px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }
}

</style>

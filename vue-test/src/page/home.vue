<template>
  <div class="home-page">
    <div class="add-btn">
      <el-button type="primary" @click="handleAdd">新增联系人</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date'}">
      <el-table-column prop="date" label="创建日期" sortable width="160">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="160">
      </el-table-column>
      <el-table-column prop="sex" sortable label="性别" width="100">
      </el-table-column>
      <el-table-column prop="age" sortable label="年龄" width="100">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加留言分类" v-if="dialog" :visible.sync="dialog" append-to-body width="450px">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄：" prop="age">
          <el-input v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="地址：" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { personSave, personList, personRemove } from '@/api/getData'
export default {
  inject: ['reload'],
  data() {
    return {
      tableData: [],
      dialog: false,
      form: {
        name: '',
        age: '',
        sex: '',
        address: '',
        _id:''
      },
      defaultForm: {
        name: '',
        age: '',
        sex: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入联系人名字', trigger: 'blur' },
        ],
        age: [
          { required: true, message: '请输入联系人年龄' },
          { type: 'number', message: '年龄必须为数字值' }
        ],
        sex: [
          { required: true, message: '请选择联系人性别', trigger: 'change' },
        ],
        address: [
          { required: true, message: '请输入联系人地址', trigger: 'blur' }
        ],
      }
    }
  },
  mounted(){
    this.personListFun();
  },
  methods: {
    handleEdit(index, row) {
      this.dialog = true;
      this.form = Object.assign(this.form, row);
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.personRemoveFun(row._id)
          this.$message.success("已成功删除")
        }).catch(() => {
          this.$message.info("已取消删除");          
        });
    },
    handleAdd() {
      this.dialog = true;
      this.form = Object.assign(this.form, this.defaultForm);
    },
    async personListFun(){
      try{
        let res = await personList();
        this.tableData = res.data.data.personDataList;
      }catch(err){
        console.log(err);
      }
    },
    async personSaveFun() {
      let res = await personSave(this.form);
      if(res.data.code == 0){
          this.reload();
      }
    },
    async personRemoveFun(id){
      let res = await personRemove({_id:id});
      this.reload();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.personSaveFun();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}

</script>
<style lang="scss" scope>
.add-btn {
  padding: 20px 10px;
}

</style>

<template>
  <div class="p-3">
    <!-- 功能区 -->
    <div class="header pb-2 pt-2 shadow-md">
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="createDep"
        >新建部门</el-button
      >
      <el-button size="mini" icon="el-icon-finished">批量操作</el-button>
      <el-button size="mini" icon="el-icon-upload2">导出</el-button>
      <el-button size="mini" icon="el-icon-printer">打印</el-button>
      <el-button size="mini" icon="el-icon-more">更多操作</el-button>
    </div>
    <!-- 表格数据 -->
    <el-table :data="tableData" border stripe>
      <el-table-column prop="dept_name" width="250px">
        <template slot="header">
          <i class="el-icon-house"></i>
          部门
        </template>
        <template slot-scope="{ row }">
          <el-tag>{{ row.dept_name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="name" width="250px">
        <template slot="header">
          <i class="el-icon-s-custom"></i>
          部门经理
        </template>
        <template slot-scope="{ row }">
          <el-tag v-if="row.name">{{ row.name }}</el-tag>
          <span class="text-gray-400">未指定部门经理</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250px">
        <template>
          <el-button size="mini" type="primary">查看详情</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表单 -->
    <el-dialog
      title="新建部门"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="depForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="部门" prop="dept_name">
          <el-input v-model="ruleForm.dept_name"></el-input>
        </el-form-item>
        <el-form-item label="部门经理" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('depForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('depForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  getAllDepartment,
  createDepartment,
  removeuserOne,
  updateuserOne,
} from "@/api/department";
export default {
  data: () => {
    return {
      dialogVisible: false,
      ruleForm: {
        dept_name: "",
        name: "",
      },
      rules: {
        dept_name: [
          { required: true, message: "请输入部门名称", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入部门经理名称", trigger: "blur" },
        ],
      },
      tableData: [],
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    createDep() {
      this.dialogVisible = true;
    },
    // 提交
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await createDepartment(this.ruleForm);
          await this.getAllDepartment();
          await this.resetForm();
          this.handleClose();
        }
      });
    },
    async getAllDepartment() {
      const res = await getAllDepartment();
      this.tableData = res;
    },
    resetForm() {
      // 初始化
      this.ruleForm = {
        dept_name: "",
        name: "",
      };
    },
  },
  async created() {
    await this.getAllDepartment();
  },
};
</script>

<style></style>

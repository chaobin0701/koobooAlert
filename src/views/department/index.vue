<template>
  <div>
    <div class="header p-3 shadow-md">
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="createDep"
        >新建</el-button
      >
    </div>
    <!-- 表格数据 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="departmentName" label="部门" width="250px"> </el-table-column>
      <el-table-column prop="departmentManager" label="部门经理" width="250px">
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
        <el-form-item label="部门" prop="departmentName">
          <el-input v-model="ruleForm.departmentName"></el-input>
        </el-form-item>
        <el-form-item label="部门经理" prop="departmentManager">
          <el-input v-model="ruleForm.departmentManager"></el-input>
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
import { getAllDepartment, createDepartment } from "@/api/department";
export default {
  data: () => {
    return {
      dialogVisible: false,
      ruleForm: {
        departmentName: "",
        departmentManager: "",
      },
      rules: {
        departmentName: [
          { required: true, message: "请输入部门名称", trigger: "blur" },
        ],
        departmentManager: [
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
        departmentName: "",
        departmentManager: "",
      };
    },
  },
  async created() {
    await this.getAllDepartment();
  },
};
</script>

<style></style>

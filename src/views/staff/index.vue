<template>
  <div>
    <!-- 数据展示 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="gender" label="性别" width="100"></el-table-column>
      <el-table-column
        prop="birthday"
        label="出生日期"
        width="150"
      ></el-table-column>
      <el-table-column prop="age" label="年龄" width="100"></el-table-column>
      <el-table-column
        prop="departmentName"
        label="部门"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="position"
        label="岗位"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departmentManager"
        label="部门经理"
        width="150"
      ></el-table-column>
      <el-table-column prop="staffState" label="员工状态" width="150">
        <template slot-scope="scope">
          {{ staffState[scope.row.staffState] }}
        </template></el-table-column
      >
      <el-table-column
        prop="entryFile"
        label="入职信息"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="entryDate"
        label="入职日期"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="workingAge"
        label="入职工龄"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departDate"
        label="离职日期"
        width="150"
      ></el-table-column>
      <el-table-column prop="phone" label="手机" width="150"></el-table-column>
      <el-table-column
        prop="nativePlace"
        label="籍贯"
        width="150"
      ></el-table-column>
      <el-table-column prop="nation" label="民族" width="100"></el-table-column>
      <el-table-column
        prop="idCard"
        label="身份证号码"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="education"
        label="学历"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="school"
        label="毕业院校"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="major"
        label="所学专业"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="dateForRegular"
        label="距离转正日期"
        width="150"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleClick(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 内容编辑 -->
    <el-dialog
      :title="form.name"
      :visible="dialogVisible"
      :before-close="handleClose"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :rules="rules"
        class="grid grid-cols-2"
      >
        <el-form-item label="员工姓名" prop="name" class="col-span-2">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="岗位" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>

        <el-form-item label="员工状态" prop="staffState">
          <el-input v-model="form.staffState"></el-input>
        </el-form-item>

        <el-form-item label="入职信息" prop="entryFile">
          <el-input v-model="form.entryFile"></el-input>
        </el-form-item>

        <el-form-item label="入职日期" prop="entryDate">
          <el-input v-model="form.entryDate"></el-input>
        </el-form-item>

        <el-form-item label="离职日期" prop="departDate">
          <el-input v-model="form.departDate"></el-input>
        </el-form-item>

        <el-form-item label="部门" prop="departmentName">
          <el-input v-model="form.departmentName"></el-input>
        </el-form-item>

        <el-form-item label="部门经理" prop="departmentManager">
          <el-input v-model="form.departmentManager"></el-input>
        </el-form-item>

        <el-form-item label="入职工龄" prop="workingAge">
          <el-input v-model="form.workingAge"></el-input>
        </el-form-item>
        <div
          class="header mb-3 p-3 border-b border-t border-opacity-20 border-gray-500 font-bold col-span-2"
        >
          员工信息
        </div>
        <el-form-item label="性别" prop="gander">
          <el-input v-model="form.gander"></el-input>
        </el-form-item>

        <el-form-item label="手机" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="籍贯" prop="nativePlace">
          <el-input v-model="form.nativePlace"></el-input>
        </el-form-item>

        <el-form-item label="民族" prop="nation">
          <el-input v-model="form.nation"></el-input>
        </el-form-item>

        <el-form-item label="身份证号" prop="idCard">
          <el-input v-model="form.idCard"></el-input>
        </el-form-item>

        <el-form-item label="出生日期" prop="birthday">
          <el-input v-model="form.birthday"></el-input>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age"></el-input>
        </el-form-item>

        <el-form-item label="学历" prop="education">
          <el-input v-model="form.education"></el-input>
        </el-form-item>

        <el-form-item label="毕业院校" prop="school">
          <el-input v-model="form.school"></el-input>
        </el-form-item>

        <el-form-item label="所学专业" prop="major">
          <el-input v-model="form.major"></el-input>
        </el-form-item>
        <div>
          <el-button size="mini" type="primary">确认</el-button>
          <el-button size="mini" @click="handleClose">取消</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getAllStaffInfo } from "@/api/staff";
import { staffState } from "@/utils/map";
export default {
  name: "TodoList",
  data() {
    return {
      tableData: [], //表格数据
      dialogVisible: false, //控制弹窗显示
      form: {},
      formLabelAlign: {},
      formState: "",
      staffState,
      rules: {},
    };
  },
  methods: {
    async getAllStaffInfo() {
      const res = await getAllStaffInfo();
      this.tableData = res;
    },
    // 编辑员工西悉尼
    handleClick(form) {
      this.form = {...form};
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
      this.form = {};
    },
    async addHandle() {},
    async updateTodo(row) {},
    handleEdit(index, row) {},

    handleDelete(index, row) {},
    beforeClose() {},
  },
  created: async function () {
    await this.getAllStaffInfo();
  },
};
</script>

<style lang="scss" scoped></style>

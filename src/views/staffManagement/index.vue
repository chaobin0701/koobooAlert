<template>
  <!-- 入职 -->
  <div>
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
        prop="department"
        label="部门"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="station"
        label="岗位"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="station"
        label="部门经理"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="state"
        label="员工状态"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="state"
        label="入职信息"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="dateOfEmployment"
        label="入职日期"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="message"
        label="入职工龄"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="dateOfResignation"
        label="离职日期"
        width="150"
      ></el-table-column>
      <el-table-column prop="jobId" label="工号" width="100"></el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="手机"
        width="150"
      ></el-table-column>
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
        prop="graduationSchool"
        label="毕业院校"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="major"
        label="所学专业"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="major"
        label="距离转正日期"
        width="150"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllStaffInfo } from "@/api/staff";

export default {
  name: "TodoList",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      formLabelAlign: {},
      formState: "",
    };
  },
  methods: {
    async getAllStaffInfo() {
      const res = await getAllStaffInfo();
      this.tableData = res;
    },
    async addHandle() {},
    async updateTodo(row) {},
    handleEdit(index, row) {},
    handleClose() {},
    handleDelete(index, row) {},
  },
  created: async function () {
    await this.getAllStaffInfo();
  },
};
</script>

<style lang="scss" scoped></style>

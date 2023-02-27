<template>
  <div>
    <div class="header p-3 shadow-md">
      <el-button size="mini" type="primary" icon="el-icon-plus"
        >发起转正</el-button
      >
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="名称" width="150"></el-table-column>
      <el-table-column
        prop="name"
        label="转正员工"
        width="150"
      ></el-table-column>
      <el-table-column prop="name" label="岗位" width="150"></el-table-column>
      <el-table-column prop="name" label="部门" width="150"></el-table-column>
      <el-table-column
        prop="name"
        label="部门经理"
        width="150"
      ></el-table-column>
      <el-table-column prop="name" label="工号" width="150"></el-table-column>
      <el-table-column
        prop="name"
        label="入职日期"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="流程状态"
        width="150"
      ></el-table-column>
      <el-table-column prop="name" label="性别" width="150"></el-table-column>
      <el-table-column prop="name" label="手机" width="150"></el-table-column>
      <el-table-column prop="name" label="籍贯" width="150"></el-table-column>
      <el-table-column prop="name" label="民族" width="150"></el-table-column>
      <el-table-column
        prop="name"
        label="身份证号"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="出生日期"
        width="150"
      ></el-table-column>
      <el-table-column prop="name" label="学历" width="150"></el-table-column>
      <el-table-column
        prop="name"
        label="毕业院校"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="所学专业"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="转正日期"
        width="150"
      ></el-table-column>
      <el-table-column label="操作" width="150" fixed="right">
        <template
          ><el-button size="mini" type="primary">查看详情</el-button></template
        >
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog
      :visible="dialogVisible"
      width="30%"
      :before-close="handleClose"
      title="发起转正"
    >
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="转正员工">
          <el-input type="text" v-model="form.regularStaff"></el-input>
        </el-form-item>
        <el-form-item label="转正说明">
          <el-input type="text" v-model="form.regularIllustrate"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<!-- 名称，转正员工,岗位，部门，部门经理，工号，入职日期，流程状态，性别，手机，籍贯，民族，身份证号，出生日期，学历，毕业院校，所学专业，转正日期 -->
<script>
export default {
  data: () => {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: "2",
          staff: "",
          station: "",
          department: "",
          departmentManager: "",
          dateEmployment: "",
          processState: "",
          gender: "",
          phoneNumber: "",
          nativePlace: "",
          nation: "",
          idCard: "",
          brithday: "",
          education: "",
          graduationSchool: "",
          major: "",
          // 转正日期
          dateRehular: "",
        },
        {
          name: "1",
          staff: "",
          station: "",
          department: "",
          departmentManager: "",
          dateEmployment: "",
          processState: "",
          gender: "",
          phoneNumber: "",
          nativePlace: "",
          nation: "",
          idCard: "",
          brithday: "",
          education: "",
          graduationSchool: "",
          major: "",
          // 转正日期
          dateRehular: "",
        },
      ],
      form: {
        regularStaff: "张三", //转正员工
        regularIllustrate: "干得不错", //转正说明
      },
      rules: {},
    };
  },
  methods: {
    handleClose() {},
  },
};
</script>

<style></style>

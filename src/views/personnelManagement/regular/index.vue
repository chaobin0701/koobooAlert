<template>
  <div class="p-3">
    <div class="header pb-2 pt-2 shadow-md">
      <el-button size="mini" type="primary" icon="el-icon-plus"
        >发起转正</el-button
      >
      <el-button size="mini" icon="el-icon-finished">批量操作</el-button>
      <el-button size="mini" icon="el-icon-upload2">导出</el-button>
      <el-button size="mini" icon="el-icon-printer">打印</el-button>
      <el-button size="mini" icon="el-icon-more">更多操作</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-s-order"></i>
          名称
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-user-solid"></i>
          转正员工
        </template></el-table-column
      >
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-s-cooperation"></i>
          岗位
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-house"></i>
          部门
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-s-custom"></i>
          部门经理
        </template></el-table-column
      >
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-date"></i>
          入职时间
        </template></el-table-column
      >
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-success"></i>
          流程状态
        </template></el-table-column
      >
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-user-solid"></i>
          性别
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-phone"></i>
          手机
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-s-promotion"></i>
          籍贯
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-s-release"></i>
          民族
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-s-release"></i>
          身份证号
        </template></el-table-column
      >
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-date"></i> 出生日期
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-success"></i>
          学历
        </template>
      </el-table-column>
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-school"></i>
          毕业院校
        </template></el-table-column
      >
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-s-cooperation"></i>所学专业
        </template></el-table-column
      >
      <el-table-column prop="name" width="150">
        <template slot="header">
          <i class="el-icon-date"></i>
          转正日期
        </template></el-table-column
      >
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
          <el-input type="text" v-model="form.regularuser"></el-input>
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
          user: "",
          station: "",
          department: "",
          departmentManager: "",
          dateEmployment: "",
          processState: "",
          gender: "",
          phoneNumber: "",
          nativePlace: "",
          nation: "",
          ID_crad: "",
          birthday: "",
          education: "",
          graduationSchool: "",
          major: "",
          // 转正日期
          dateRehular: "",
        },
        {
          name: "1",
          user: "",
          station: "",
          department: "",
          departmentManager: "",
          dateEmployment: "",
          processState: "",
          gender: "",
          phoneNumber: "",
          nativePlace: "",
          nation: "",
          ID_crad: "",
          birthday: "",
          education: "",
          graduationSchool: "",
          major: "",
          // 转正日期
          dateRehular: "",
        },
      ],
      form: {
        regularuser: "张三", //转正员工
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

<template>
  <div class="p-3">
    <div class="header pt-3 pb-3 shadow-md">
      <el-button size="mini" type="primary" icon="el-icon-plus"
        >发起离职</el-button
      >
      <el-button size="mini" icon="el-icon-finished">批量操作</el-button>
      <el-button size="mini" icon="el-icon-upload2">导出</el-button>
      <el-button size="mini" icon="el-icon-printer">打印</el-button>
      <el-button size="mini" icon="el-icon-more">更多操作</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-s-order"></i>
          离职申请记录
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-s-cooperation"></i>
          岗位
        </template>
      </el-table-column>
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-house"></i>
          部门
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-date"></i>
          入职时间
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-success"></i>
          流程状态
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-files"></i>
          离职材料
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-user-solid"></i>
          离职员工
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" label="离职日期" width="150">
        <template slot="header">
          <i class="el-icon-user-solid"></i>
          员工姓名
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-date"></i>
          发起日期
        </template></el-table-column
      >
      <el-table-column prop="departIllustrate" width="150">
        <template slot="header">
          <i class="el-icon-info"></i>
          离职原因
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
      width="40%"
      :before-close="handleClose"
      title="发起离职"
    >
      <el-form
        ref="form"
        class="grid grid-cols-2"
        :model="form"
        label-width="80px"
        :rules="rules"
      >
        <el-form-item label="离职员工">
          <el-input type="text" v-model="form.departName"></el-input>
        </el-form-item>
        <el-form-item label="离职日期">
          <el-input type="text" v-model="form.departDate"></el-input>
        </el-form-item>
        <el-form-item label="离职原因" class="col-span-2">
          <el-input type="text" v-model="form.departCause"></el-input>
        </el-form-item>
        <el-form-item label="离职材料" class="col-span-2">
          <el-input type="text" v-model="form.departFile"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<!-- 离职申请记录;岗位;部门;入职时间;流程状态;离职材料;离职员工;离职日期;发起日期;离职原因 -->
<script>
export default {
  data: () => {
    return {
      dialogVisible: false,
      tableData: [
        {
          departIllustrate: "1",
          station: "",
          department: "",
          dateEmployment: "",
          processState: "",
          departFile: "",
          departStaff: "",
          departDate: "",
          launchDate: "",
          departCause: "",
        },
      ],
      form: {
        departName: "",
        departDate: "",
        departCause: "",
        departFile: "",
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

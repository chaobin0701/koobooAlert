<template>
  <div>
    <div class="header p-3 shadow-md">
      <el-button size="mini" type="primary" icon="el-icon-plus"
        >发起离职</el-button
      >
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        prop="departIllustrate"
        label="离职申请记录"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="岗位"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="部门"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="入职时间"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="流程状态"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="离职材料"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="离职员工"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="离职日期"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="发起日期"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departIllustrate"
        label="离职原因"
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
        {
          departIllustrate: "2",
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

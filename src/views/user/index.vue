<template>
  <div class="p-3">
    <!-- 功能区 -->
    <div class="header pb-2 pt-2 shadow-md">
      <el-button size="mini" icon="el-icon-finished">批量操作</el-button>
      <el-button size="mini" icon="el-icon-upload2">导入</el-button>
      <el-button size="mini" icon="el-icon-upload2">导出</el-button>
      <el-button size="mini" icon="el-icon-printer">打印</el-button>
      <el-button size="mini" icon="el-icon-more">更多操作</el-button>
    </div>
    <!-- 数据展示 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="user_name" width="150">
        <template slot="header">
          <i class="el-icon-user-solid"></i>
          员工姓名
        </template>
      </el-table-column>
      <el-table-column prop="gender" width="150">
        <template slot="header">
          <i class="el-icon-user-solid"></i>
          性别
        </template>
      </el-table-column>
      <el-table-column prop="birthday" width="150">
        <template slot="header">
          <i class="el-icon-date"></i> 出生日期
        </template>
      </el-table-column>
      <el-table-column prop="age" width="150">
        <template slot="header"> <i class="el-icon-date"></i> 年龄 </template>
      </el-table-column>
      <el-table-column prop="dept_name" width="150">
        <template slot="header">
          <i class="el-icon-house"></i>
          部门
        </template>
      </el-table-column>

      <!-- <el-table-column prop="entryDate" width="150">
        <template slot="header">
          <i class="el-icon-date"></i>
          入职日期
        </template>
        <template slot-scope="{ row }">
          {{ $dayjs(row.dateEmployment).format("YYYY-MM-DD") }}
        </template>
      </el-table-column> -->

      <el-table-column prop="phone" width="150">
        <template slot="header">
          <i class="el-icon-phone"></i>
          手机
        </template>
      </el-table-column>
      <el-table-column prop="nativePlace" width="150">
        <template slot="header">
          <i class="el-icon-s-promotion"></i>
          籍贯
        </template>
      </el-table-column>
      <el-table-column prop="nation" width="150">
        <template slot="header">
          <i class="el-icon-s-release"></i>
          民族
        </template>
      </el-table-column>
      <el-table-column prop="ID_crad" width="150">
        <template slot="header">
          <i class="el-icon-s-release"></i>
          身份证号
        </template>
      </el-table-column>
      <el-table-column prop="birthday" width="150">
        <template slot="header">
          <i class="el-icon-date"></i> 出生日期
        </template>
        <template slot-scope="{ row }">
          {{ $dayjs(row.dateEmployment).format("YYYY-MM-DD") }}</template
        ></el-table-column
      >
      <el-table-column prop="education" width="150">
        <template slot="header">
          <i class="el-icon-success"></i>
          学历
        </template>
      </el-table-column>
      <el-table-column prop="school" width="150">
        <template slot="header">
          <i class="el-icon-school"></i>
          毕业院校
        </template></el-table-column
      >
      <el-table-column prop="major" label="所学专业" width="150">
        <template slot="header">
          <i class="el-icon-s-cooperation"></i>所学专业
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">查看详情</el-button>
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

        <el-form-item label="员工状态" prop="userState">
          <el-input v-model="form.userState"></el-input>
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
        <el-form-item label="性别" prop="gender">
          <el-input v-model="form.gender"></el-input>
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

        <el-form-item label="身份证号" prop="ID_crad">
          <el-input v-model="form.ID_crad"></el-input>
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
import { getAlluserInfo } from "@/api/userInfo";
import { userState } from "@/utils/map";
export default {
  data() {
    return {
      tableData: [], //表格数据
      dialogVisible: false, //控制弹窗显示
      form: {},
      formLabelAlign: {},
      formState: "",
      userState,
      rules: {},
    };
  },
  methods: {
    async getAlluserInfo() {
      const res = await getAlluserInfo();
      this.tableData = res;
    },
    // 编辑员工西悉尼
    handleClick(form) {
      this.form = { ...form };
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
    await this.getAlluserInfo();
  },
};
</script>

<style lang="scss" scoped></style>

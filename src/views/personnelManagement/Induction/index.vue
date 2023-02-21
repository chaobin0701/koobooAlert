<template>
  <div>
    <div class="header p-3 shadow-md">
      <el-button size="mini" type="primary" icon="el-icon-plus" @click="launch"
        >发起入职</el-button
      >
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column
        prop="name"
        label="员工姓名"
        width="150"
      ></el-table-column>
      <el-table-column prop="department" label="入职部门" width="150">
      </el-table-column>
      <el-table-column
        prop="station"
        label="入职岗位"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="departmentManager"
        label="部门经理"
        width="150"
      ></el-table-column>

      <el-table-column prop="processStatus" label="流程状态" width="150">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.processStatus === 0">审核中</el-tag>
          <el-tag type="success" v-else-if="scope.row.processStatus === 1"
            >已通过</el-tag
          >
          <el-tag type="info" v-else>未通过</el-tag>
        </template></el-table-column
      >
      <el-table-column prop="files" label="入职资料" width="150">
        <template slot-scope="scope" v-if="scope.row.files">
          <div v-for="file in scope.row.files" :key="file.absoluteUrl">
            <a :href="file.absoluteUrl">{{ file.name }}</a>
          </div>
        </template></el-table-column
      >
      <el-table-column prop="dateEmployment" label="入职日期" width="150"
        ><template slot-scope="{ row }">
          {{ $dayjs(row.dateEmployment).format("YYYY-MM-DD") }}
        </template></el-table-column
      >
      <el-table-column prop="jobId" label="工号" width="150"></el-table-column>
      <el-table-column prop="gender" label="性别" width="150"></el-table-column>
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
      <el-table-column prop="nation" label="民族" width="150"></el-table-column>
      <el-table-column
        prop="idCard"
        label="身份证号"
        width="150"
      ></el-table-column>
      <el-table-column prop="brithday" label="出生日期" width="150">
        <template slot-scope="{ row }">
          {{ $dayjs(row.dateEmployment).format("YYYY-MM-DD") }}</template
        ></el-table-column
      >
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

      <el-table-column label="操作" fixed="right" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="dislogModel === 'edit' ? '修改信息' : '发起入职'"
      :visible="dialogVisible"
      width="50%"
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

        <el-form-item label="入职部门" prop="department">
          <el-select v-model="form.department">
            <el-option
              :label="item.departmentName"
              :value="item._id"
              v-for="(item, index) in deps"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="入职岗位" prop="station">
          <el-input v-model="form.station"></el-input>
        </el-form-item>
        <el-form-item label="入职日期" prop="dateEmployment">
          <el-date-picker
            v-model="form.dateEmployment"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="试用期" prop="probation">
          <el-input type="text" v-model="form.probation">
            <template slot="append">天</template></el-input
          >
        </el-form-item>

        <el-form-item class="col-span-2">
          <div>入职资料</div>
          <el-upload
            class="upload-demo"
            ref="upload"
            action=""
            :file-list="form.files"
            :auto-upload="false"
            :http-request="fileUpload"
          >
            <el-button slot="trigger" size="small" type="primary"
              >选取文件</el-button
            >
          </el-upload>
        </el-form-item>

        <el-form-item label="工号">
          <el-input type="text" v-model="form.jobId"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input type="text" v-model="form.gender"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input type="text" v-model="form.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="籍贯">
          <el-input type="text" v-model="form.nativePlace"></el-input>
        </el-form-item>

        <el-form-item label="民族">
          <el-input type="text" v-model="form.nation"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input type="text" v-model="form.idCard"></el-input>
        </el-form-item>

        <el-form-item label="出生日期">
          <el-date-picker
            v-model="form.brithday"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="学历">
          <el-input type="text" v-model="form.education"></el-input>
        </el-form-item>

        <el-form-item label="毕业院校">
          <el-input type="text" v-model="form.graduationSchool"></el-input>
        </el-form-item>
        <el-form-item label="所学专业">
          <el-input type="text" v-model="form.major"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="createInduction('form')">{{
            dislogModel === "edit" ? "修改" : "创建"
          }}</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item></el-form
      >
    </el-dialog>
  </div>
</template>

<script>
import { getAllDepartment } from "@/api/department";

import {
  getAllEntryInfo,
  removeEntry,
  createEntry,
  updateEntry,
} from "@/api/entry.js";
export default {
  data: () => {
    return {
      dialogVisible: false,
      param: new FormData(),
      deps: [],
      tableData: [],
      dislogModel: "",
      form: {
        // 入职信息
        name: "",
        department: "",
        station: "",
        dateEmployment: "",
        probation: "",
        // 员工信息
        jobId: "",
        phoneNumber: "",
        nativePlace: "",
        nation: "",
        idCard: "",
        brithday: "",
        education: "",
        graduationSchool: "",
        major: "",
      },
      rules: {
        name: [{ required: true, message: "请输入名字", trigger: "blur" }],
        department: [
          { required: true, message: "请输入部门", trigger: "blur" },
        ],
        station: [{ required: true, message: "请输入岗位", trigger: "blur" }],
        deteEmployment: [
          { required: true, message: "输入入职日期", trigger: "blur" },
        ],
        probation: [
          { required: true, message: "请输入试用期", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async launch() {
      this.dialogVisible = true;
      this.dislogModel = "create";
    },
    async handleClose() {
      this.dialogVisible = false;
      this.form = {
        // 入职信息
        name: "",
        department: "",
        station: "",
        dateEmployment: "",
        probation: "",
        // 员工信息
        jobId: "",
        phoneNumber: "",
        nativePlace: "",
        nation: "",
        idCard: "",
        brithday: "",
        education: "",
        graduationSchool: "",
        major: "",
      };
      this.FormData = new FormData();
    },
    async fileUpload(data) {
      // 文件上传
      const { file } = data;
      file.fileName = file.name;
      this.param.append("files", file, file.name);
    },
    // 创建一个入职审批
    async createInduction(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.$refs.upload.submit();
          Object.keys(this.form).forEach((key) => {
            this.param.append(key, this.form[key]);
          });
          if (this.dislogModel === "create") {
            await createEntry(this.param);
          } else {
            await updateEntry(this.param);
          }
          await this.getAllEntryInfo();
          this.param = new FormData();

          this.dialogVisible = false;
        }
      });
    },
    // 获取信息
    async getAllEntryInfo() {
      const res = await getAllEntryInfo();
      this.tableData = res;
    },
    handleEdit(data) {
      // 编辑
      this.dislogModel = "edit";
      this.form = { ...this.form, ...data };
      this.dialogVisible = true;
    },
    async handleDelete({ _id }) {
      await removeEntry({ _id });
      await this.getAllEntryInfo();
    },
  },
  computed: {},
  async created() {
    this.getAllEntryInfo();
    this.deps = await getAllDepartment();
  },
};
</script>

<style></style>

<template>
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

      <el-form-item label="入职部门" prop="departmentId">
        <el-select v-model="form.departmentId">
          <el-option
            :label="item.departmentName"
            :value="item._id"
            v-for="(item, index) in deps"
            :key="index"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="入职岗位" prop="position">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item label="入职日期" prop="entryDate">
        <el-date-picker
          v-model="form.entryDate"
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
          :file-list="fileList"
          :auto-upload="false"
          :http-request="fileUpload"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
        </el-upload>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender">
          <el-option :label="'男'" value="男"></el-option>
          <el-option :label="'女'" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input type="text" v-model="form.phone"></el-input>
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
        <el-input type="text" v-model="form.school"></el-input>
      </el-form-item>
      <el-form-item label="所学专业">
        <el-input type="text" v-model="form.major"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="createentry('form')">{{
          dislogModel === "edit" ? "修改" : "创建"
        }}</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item></el-form
    >
  </el-dialog>
</template>

<script>
import { getAllDepartment } from "@/api/department";
export default {
  data: () => {
    return {
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
      deps: [],
      fileList: [], //上传文件列表
    };
  },
  props: {
    dislogModel: String,
    form: Object,
    dialogVisible: Boolean,
  },
  methods: {
    createentry(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.$refs.upload.submit();
          this.$emit("createentry");
        }
      });
    },
    handleClose() {
      this.$emit("handleClose");
    },
    fileUpload(data) {
      this.$emit("fileUpload", data);
    },
  },
  async created() {
    this.deps = await getAllDepartment();
  },
};
</script>

<style></style>

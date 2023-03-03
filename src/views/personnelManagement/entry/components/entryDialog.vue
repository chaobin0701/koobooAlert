<template>
  <el-dialog :visible="dialogVisible" :before-close="handleClose">
    <!-- 标题 -->
    <template slot="title">
      <h3 class="text-xl font-bold" v-if="dislogModel !== 'edit'">
        创建入职流程
      </h3>
      <h3 class="text-xl font-bold" v-else>修改信息</h3>
    </template>
    <!-- 入职信息 -->

    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      :rules="rules"
      class="grid grid-cols-2"
    >
      <div class="col-span-2 pb-2 pt-2 border-b mb-2">
        <h3 class="text-l pl-3 font-bold text-blue-400">入职信息</h3>
      </div>
      <el-form-item label="员工姓名" prop="user_name" class="col-span-2">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item label="入职部门" prop="departmentId">
        <el-select v-model="form.dept_id" class="w-full">
          <el-option
            :label="item.dept_name"
            :value="item._id"
            v-for="(item, index) in deps"
            :key="index"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="入职岗位" prop="position">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item label="入职日期" prop="entry_date">
        <el-date-picker
          v-model="form.entry_date"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="试用期" prop="probation_period">
        <el-input type="text" v-model="form.probation_period">
          <template slot="append">天</template>
        </el-input>
      </el-form-item>

      <el-form-item class="col-span-2" label="入职资料">
        <el-upload
          action="http://test.chaobin-gz.sitepapa.com/api/file"
          :on-remove="handleRemove"
          :on-success="uploadSuccess"
          multiple
          :file-list="form.entry_files"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <!-- 员工信息 -->
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      :rules="rules"
      class="grid grid-cols-2"
    >
      <div class="col-span-2 pb-2 pt-2 border-b mb-2">
        <h3 class="text-l pl-3 font-bold text-green-400">员工信息</h3>
      </div>
      <el-form-item label="性别">
        <el-select v-model="form.gender" class="w-full">
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
        <el-input type="text" v-model="form.ID_crad"></el-input>
      </el-form-item>

      <el-form-item label="出生日期" prop="birthday">
        <el-date-picker
          v-model="form.birthday"
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
    </el-form>
    <!-- 底部 -->
    <template slot="footer">
      <el-button type="primary" @click="createEntry">{{
        dislogModel === "edit" ? "修改" : "创建"
      }}</el-button>
      <el-button @click="handleClose">取消</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { getAllDepartment } from "@/api/department";
export default {
  data: () => {
    return {
      rules: {
        user_name: [{ required: true, message: "请输入名字", trigger: "blur" }],
        departmentId: [
          { required: true, message: "请输入部门", trigger: "blur" },
        ],
        position: [{ required: true, message: "请输入岗位", trigger: "blur" }],
        entry_date: [
          { required: true, message: "输入入职日期", trigger: "blur" },
        ],
        probation_period: [
          { required: true, message: "请输入试用期", trigger: "blur" },
        ],
      },
      test: "",
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
    // 创建入职信息
    createEntry() {
      this.$emit("createEntry");
    },
    // 关闭弹窗
    handleClose() {
      this.$emit("handleClose");
    },
    // 文件上传成功的狗子
    uploadSuccess(file, fileList) {
      console.log(`output->fileList`, fileList);
      this.form.entry_files.push({
        name: fileList.response.FullName,
        size: fileList.response.Size,
        absoluteUrl: fileList.response.AbsoluteUrl,
      });
    },
    handleRemove(file, fileList) {
      this.form.entry_files = fileList;
    },
  },
  async created() {
    this.deps = await getAllDepartment();
  },
};
</script>

<style>
.el-dialog__header {
  @apply bg-white border-b;
}
.el-dialog {
  @apply rounded-l bg-gray-100 overflow-hidden;
}
.el-form-item {
  @apply mb-3;
}
.el-form-item > label,
.el-form-item > .el-form-item__content {
  @apply pb-1 pt-1;
}
.el-date-editor.el-input {
  @apply w-full;
}
.el-dialog__footer {
  @apply bg-white pb-2 pt-2 pr-3 pl-3;
}

.el-dialog__body {
  @apply pt-0 pb-0;
}
</style>

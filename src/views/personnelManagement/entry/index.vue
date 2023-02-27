<template>
  <div>
    <div class="header p-3 shadow-md">
      <el-button size="mini" type="primary" icon="el-icon-plus" @click="launch"
        >发起入职</el-button
      >
    </div>
    <!-- 表格 -->
    <entryTable
      :tableData="tableData"
      :dislogModel="dislogModel"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
    ></entryTable>
    <!-- 弹窗 -->
    <entryDialog
      :dislogModel="dislogModel"
      :dialogVisible="dialogVisible"
      @handleClose="handleClose"
      @createentry="createentry"
      @fileUpload="fileUpload"
      :form="form"
    ></entryDialog>
  </div>
</template>

<script>
import entryTable from "./components/entryTable.vue";
import entryDialog from "./components/entryDialog.vue";
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
        departmentId: "",
        station: "",
        entryDate: "",
        probation: "",
        gender: "",
        // 员工信息
        phone: "",
        nativePlace: "",
        nation: "",
        idCard: "",
        brithday: "",
        education: "",
        school: "",
        major: "",
      },
    };
  },
  components: { entryTable, entryDialog },
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
    async createentry() {
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
    },
    // 获取信息
    async getAllEntryInfo() {
      const res = await getAllEntryInfo();
      this.tableData = res;
    },
    // 编辑
    async handleEdit(data) {
      this.dislogModel = "edit";
      this.form = { ...this.form, ...data };
      this.dialogVisible = true;
    },
    // 删除
    async handleDelete({ _id, staffId }) {
      await removeEntry({ _id, staffId });
      await this.getAllEntryInfo();
    },
  },
  computed: {},
  async created() {
    this.getAllEntryInfo();
  },
};
</script>

<style></style>

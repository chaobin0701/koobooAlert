<template>
  <div class="p-3">
    <div class="header shadow-md pt-3 pb-3">
      <el-button size="mini" type="primary" icon="el-icon-plus" @click="launch"
        >发起入职</el-button
      >
      <el-button size="mini" icon="el-icon-finished">批量操作</el-button>
      <el-button size="mini" icon="el-icon-upload2">导出</el-button>
      <el-button size="mini" icon="el-icon-printer">打印</el-button>
      <el-button size="mini" icon="el-icon-more">更多操作</el-button>
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
      @createEntry="createEntry"
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
      dialogVisible: false, // 控制弹窗显示
      tableData: [], //入职信息
      dislogModel: "", //弹窗处理的事项 edit or create
      // 表单对象
      form: {
        userInfo: {},
      },
    };
  },
  components: { entryTable, entryDialog },
  methods: {
    // 发起入职
    async launch() {
      this.dialogVisible = true;
      this.dislogModel = "create";
    },
    // 关闭弹窗
    async handleClose() {
      this.dialogVisible = false;
      this.form = {
        entry_files: [],
        userInfo: {},
      };
    },
    // 创建一个入职审批
    async createEntry() {
      if (this.dislogModel === "create") {
        await createEntry(this.form);
      } else {
        await updateEntry(this.form);
      }
      await this.getAllEntryInfo();
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
    async handleDelete({ _id, userId }) {
      await removeEntry({ _id, userId });
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

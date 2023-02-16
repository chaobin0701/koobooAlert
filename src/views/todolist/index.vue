<template>
  <div>
    <el-button type="primary" @click="addHandle">添加新的事项</el-button>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="message" label="待办事项" width="180">
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" width="280">
      </el-table-column>
      <el-table-column prop="updateAt" label="修改时间" width="280">
      </el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          <el-tag
            type="success"
            v-if="scope.row.state === 1 || scope.row.state === '1'"
            >已完成</el-tag
          >
          <el-tag type="warning" v-else>未完成</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 表单 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        label-position="right"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="代办事项">
          <el-input type="textarea" v-model="formLabelAlign.message"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="formLabelAlign.state"
            placeholder="请选择事项状态"
          >
            <el-option label="已完成" value="1"></el-option>
            <el-option label="未完成" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateTodo(formLabelAlign)"
            >确认</el-button
          >
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  addTodoList,
  getTodoList,
  updateTodoList,
  removeTodoList,
} from "@/api/todo";
export default {
  name: "TodoList",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      formLabelAlign: {},
      formState: "",
    };
  },
  methods: {
    async getTodoList(_id) {
      const { data } = await getTodoList(_id);
      this.tableData = data;
    },
    async addHandle() {
      this.formState = "create";
      this.dialogVisible = true;
      this.formLabelAlign = {
        message: "事项",
        state: "0",
      };
    },
    async updateTodo(row) {
      if (this.formState === "edit") {
        await updateTodoList(row);
      } else {
        await addTodoList(row);
      }
      await this.getTodoList();
      await this.handleClose();
    },
    handleEdit(index, row) {
      this.formState = "edit";
      this.formLabelAlign = { ...row };
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
      this.formLabelAlign = {};
    },
    handleDelete(index, row) {
      this.$confirm("是否删除此代办事件", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          removeTodoList(row._id).then(async () => {
            await this.getTodoList();
          });
        })
        .catch(async () => {
          await this.handleClose();
        });
    },
  },
  created: async function () {
    await this.getTodoList();
  },
};
</script>

<style lang="scss" scoped></style>

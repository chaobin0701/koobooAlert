<template>
  <div class="p-5">
    <div
      class="header p-3 border-b border-opacity-20 border-gray-500 font-bold"
    >
      入离职流程
    </div>
    <div
      class="header p-3 border-b border-opacity-20 border-gray-500 flex justify-between"
    >
      <div class="space-x-3">
        <el-tag>待审批</el-tag>
        <el-tag type="info">已审批</el-tag>
        <el-tag type="info">我发起的</el-tag>
        <el-tag type="info">抄送我的</el-tag>
        <el-tag type="info">草稿</el-tag>
      </div>
      <span
        class="flex pr-4 pl-4 justify-between items-center border border-gray-200 rounded-full"
      >
        <input type="text" placeholder="搜索审批" class="outline-none" />
        <svg-icon icon-class="search" class="text-gray-500 cursor-pointer" />
      </span>
    </div>
    <!-- 审批列表 -->
    <ul class="mt-5 space-y-2">
      <li
        class="bg-gray-100 flex justify-between items-center rounded-md p-3"
        v-for="item in info"
        :key="item._id"
      >
        <div class="flex items-center">
          <div
            class="w-8 h-8 mr-4 bg-green-500 rounded-md flex justify-center items-center"
          >
            <svg-icon icon-class="user" class="text-white" />
          </div>
          <div class="h-full flex flex-col justify-between space-y-3">
            <p class="font-bold text-sm text-gray-600">
              {{ `入职审批-${item.user_name}-${item.position}` }}
            </p>
            <p class="text-xs text-gray-500">
              {{ $dayjs(item.create_date).format("YYYY-MM-DD") }} 提交
            </p>
          </div>
        </div>
        <div>
          <button
            class="bg-green-400 border rounded-full pr-2 pl-2 pt-1 pb-1 text-xs font-bold text-white border-gray-600"
            @click="approval(item)"
          >
            {{ item.flow_remark }}
          </button>
        </div>
      </li>
    </ul>

    <!-- 弹窗 -->
    <el-dialog
      :title="form.approvalName"
      :visible="dialogVisible"
      :before-close="handleClose"
    >
      <template slot="title">
        <h3 class="text-xl font-bold">入职流程审批</h3>
      </template>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :rules="rules"
        class="grid grid-cols-2"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.user_name"></el-input>
        </el-form-item>
        <el-form-item label="岗位" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
        <el-form-item label="入职日期" prop="entryDate">
          <el-input v-model="form.entry_date"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="departmentName">
          <el-input v-model="form.dept_name"></el-input>
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
        <div class="mb-3 mt-3">
          <el-button type="primary" @click="auditHandle(form)">同意</el-button>
          <el-button @click="refuseHandle(form)">拒绝</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getAllEntryInfo, entryHandler } from "@/api/entry.js";
import { userState } from "@/utils/map";
export default {
  data: () => {
    return {
      info: [],
      userState,
      dialogVisible: false, //控制弹窗显示
      form: {},
      rules: {},
    };
  },
  methods: {
    approval(data) {
      const { _id, userId } = data;
      this.dialogVisible = true;
      this.form = { ...data };
    },
    handleClose() {
      this.form = {};
      this.dialogVisible = false;
    },
    auditHandle(data) {
      // 通过审批，流程进入下一阶段。
      let { _id, current_node, flow_no } = data;
      entryHandler({ _id, current_node, flow_no, result: "success" });
    },
    refuseHandle(data) {
      // 拒绝审批，流程中断
      let { _id, current_node, flow_no } = data;
      entryHandler({ _id, current_node, flow_no, result: "refuse" });
    },
  },
  computed: {
    auditStage() {},
  },
  async created() {
    this.info = await getAllEntryInfo();

    // 计算当前审批的进度
    this.info.forEach((item) => {
      // 获取当前id
      let node_id = item.current_node;
      // 查询与当前id配对的流程点
      let result = item.flow_line.find((flow) => {
        return flow.next_node_id === node_id;
      });
      item.flow_remark = result.remark;
      // 输出一下
      // console.log(`output->result`,result)
    });
  },
};
</script>

<style></style>

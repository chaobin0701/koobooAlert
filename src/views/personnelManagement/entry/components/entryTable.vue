<template>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="name" label="员工姓名" width="150"></el-table-column>
    <el-table-column prop="departmentName" label="入职部门" width="150">
    </el-table-column>
    <el-table-column
      prop="position"
      label="入职岗位"
      width="150"
    ></el-table-column>
    <el-table-column
      prop="departmentManager"
      label="部门经理"
      width="150"
    ></el-table-column>

    <el-table-column prop="approvalState" label="流程状态" width="150">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.approvalState == 0">审核中</el-tag>
        <el-tag type="success" v-else-if="scope.row.approvalState == 1"
          >已通过</el-tag
        >
        <el-tag type="info" v-else>未通过</el-tag>
      </template></el-table-column
    >
    <el-table-column prop="entryFile" label="入职资料" width="150">
      <template slot-scope="scope" v-if="scope.row.files">
        <div v-for="file in scope.row.files" :key="file.absoluteUrl">
          <a :href="file.absoluteUrl">{{ file.name }}</a>
        </div>
      </template></el-table-column
    >
    <el-table-column prop="entryDate" label="入职日期" width="150"
      ><template slot-scope="{ row }">
        {{ $dayjs(row.dateEmployment).format("YYYY-MM-DD") }}
      </template></el-table-column
    >
    <el-table-column prop="gender" label="性别" width="150"></el-table-column>
    <el-table-column
      prop="phone"
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
      prop="school"
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
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: {
    tableData: Array
  },
  methods: {
    handleEdit(data) {
      this.$emit("handleEdit", data);
    },
    handleDelete(data) {
      this.$emit("handleDelete", data);
    },
  },
};
</script>

<style></style>

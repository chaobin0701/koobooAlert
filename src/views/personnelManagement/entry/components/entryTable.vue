<template>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="user_name" width="150">
      <template slot="header">
        <i class="el-icon-user-solid"></i>
        员工姓名
      </template>
    </el-table-column>
    <el-table-column prop="position" width="150">
      <template slot="header">
        <i class="el-icon-s-cooperation"></i>
        入职岗位
      </template>
    </el-table-column>
    <el-table-column prop="dept_name" width="150">
      <template slot="header">
        <i class="el-icon-house"></i>
        入职部门
      </template>
    </el-table-column>

    <el-table-column width="150">
      <template slot="header">
        <i class="el-icon-success"></i>
        流程状态
      </template>
      <template slot-scope="scope">
        <el-tag v-if="scope.row.state == 1">审核中</el-tag>
        <el-tag type="success" v-else-if="scope.row.state == 2">已通过</el-tag>
        <el-tag type="info" v-else>未通过</el-tag>
      </template></el-table-column
    >

    <el-table-column prop="entryFile" width="200">
      <template slot="header"> <i class="el-icon-files"></i>入职资料 </template>
      <template slot-scope="scope">
        <a
          :href="item.absoluteUrl"
          v-for="item in scope.row.entry_files"
          :key="item.absoluteUrl"
          target="_blank"
        >
          <el-tag>
            {{ item.name }}
          </el-tag>
        </a>
      </template>
    </el-table-column>

    <el-table-column prop="entryDate">
      <template slot="header">
        <i class="el-icon-date"></i>
        入职日期
      </template>
      <template slot-scope="{ row }">
        {{ $dayjs(row.dateEmployment).format("YYYY-MM-DD") }}
      </template>
    </el-table-column>

    <el-table-column label="操作" fixed="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row)" type="primary"
          >查看详情</el-button
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
    tableData: Array,
  },
  methods: {
    handleEdit(data) {
      this.$emit("handleEdit", data);
    },
  },
};
</script>

<style></style>

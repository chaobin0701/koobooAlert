<template>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="name" width="150">
      <template slot="header">
        <i class="el-icon-user-solid"></i>
        员工姓名
      </template>
    </el-table-column>
    <el-table-column prop="position" width="150">
      <template slot="header">
        <i class="el-icon-s-cooperation"></i>
        入职岗位
      </template></el-table-column
    >
    <el-table-column prop="departmentName" width="150">
      <template slot="header">
        <i class="el-icon-house"></i>
        入职部门
      </template>
    </el-table-column>

    <el-table-column prop="departmentManager" width="150">
      <template slot="header">
        <i class="el-icon-s-custom"></i>
        部门经理
      </template>
    </el-table-column>

    <el-table-column prop="approvalState" width="150">
      <template slot="header">
        <i class="el-icon-success"></i>
        流程状态
      </template>
      <template slot-scope="scope">
        <el-tag v-if="scope.row.approvalState == 0">审核中</el-tag>
        <el-tag type="success" v-else-if="scope.row.approvalState == 1"
          >已通过</el-tag
        >
        <el-tag type="info" v-else>未通过</el-tag>
      </template></el-table-column
    >

    <el-table-column prop="entryFile" width="200">
      <template slot="header"> <i class="el-icon-files"></i>入职资料 </template>
      <template slot-scope="scope" v-if="scope.row.entryFile">
        <div v-for="file in scope.row.entryFile" :key="file.uid">
          <a
            :href="`http://test.chaobin-gz.sitepapa.com/__kb/kfile/${file.name}`"
            target="_blank"
          >
            <el-tag>
              <i class="el-icon-tickets"></i>
              {{ file.name }}
            </el-tag>
          </a>
        </div>
      </template>
    </el-table-column>

    <el-table-column prop="entryDate" width="150">
      <template slot="header">
        <i class="el-icon-date"></i>
        入职日期
      </template>
      <template slot-scope="{ row }">
        {{ $dayjs(row.dateEmployment).format("YYYY-MM-DD") }}
      </template>
    </el-table-column>

    <el-table-column prop="gender" width="150">
      <template slot="header">
        <i class="el-icon-user-solid"></i>
        性别
      </template>
    </el-table-column>

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

    <el-table-column prop="idCard" width="150">
      <template slot="header">
        <i class="el-icon-s-release"></i>
        身份证号
      </template>
    </el-table-column>

    <el-table-column prop="birthday" width="150">
      <template slot="header"> <i class="el-icon-date"></i> 出生日期 </template>
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

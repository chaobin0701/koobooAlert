<template>
  <div class="m-7">
    <!-- 顶部 -->
    <div class="flex justify-between items-center">
      <div class="space-x-2">
        <el-button
          icon="el-icon-arrow-left"
          size="mini"
          @click="back"
        ></el-button>
        <div
          v-for="(url, index) in folder"
          @click="jumpFolder(index)"
          :key="url"
          class="inline-block hover:bg-gray-400 cursor-pointer p-1 duration-500"
        >
          {{ url.substring(url.lastIndexOf("/")) }}
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div>
        <el-button size="mini" @click="openDialog('upload')"
          >文件上传</el-button
        >
        <el-button size="mini" @click="openDialog('createFolder')"
          >创建文件夹</el-button
        >
      </div>
    </div>
    <el-divider></el-divider>
    <!-- 文件展示  -->
    <el-table :data="allFile" style="width: 100%">
      <el-table-column label="文件名" width="280">
        <template slot-scope="scope">
          <a
            v-if="scope.row.fileType === '文件夹'"
            @click="toFolder(scope.row.Name)"
          >
            <el-tag type="warning">
              <i class="el-icon-folder-opened"></i> {{ scope.row.Name }}
            </el-tag>
          </a>
          <a :href="scope.row.AbsoluteUrl" target="_blank" v-else>
            <el-tag>
              <i class="el-icon-tickets"></i>
              {{ scope.row.Name }}
            </el-tag>
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="fileType" label="文件类型" width="180">
      </el-table-column>
      <el-table-column prop="LastModified" label="修改时间" width="280">
      </el-table-column>
      <el-table-column prop="StringSize" label="文件大小"> </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <div v-if="scope.row.fileType != '文件夹'">
            <a :href="scope.row.AbsoluteUrl" target="_blank">
              <el-button size="mini" icon="el-icon-thumb">打开 </el-button>
            </a>
            <el-button
              size="mini"
              icon="el-icon-delete"
              @click="removeFile(scope.row.FullName)"
              >删除</el-button
            >
          </div>
          <div v-else>
            <el-button
              size="mini"
              icon="el-icon-thumb"
              @click="toFolder(scope.row.Name)"
              >打开</el-button
            >
            <el-button
              size="mini"
              icon="el-icon-delete"
              @click="removeFolder(scope.row.FullName)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="功能"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div v-if="dialogModel === 'upload'">
        <!-- 上传 -->
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
          <el-button
            style="margin-left: 10px"
            size="small"
            type="success"
            @click="$refs.upload.submit()"
            >上传到服务器</el-button
          >
        </el-upload>
      </div>
      <div v-else>
        <!-- 新建文件夹 -->
        <el-button type="primary" size="mini" @click="createFolder"
          >创建文件夹</el-button
        >
        <el-input
          type="text"
          v-model="newFolderName"
          placeholder="在这里输入新文件夹名称"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getFile,
  fileUpload,
  deleteFile,
  createFolder,
  deleteFolder,
  getFolders,
} from "@/api/file";
export default {
  name: "fileSystem",
  data: () => {
    return {
      folder: ["/"], //路径栈
      files: [], // 文件信息
      folders: [], //子文件夹信息
      fileList: [], //上传文件列表
      newFolderName: "",
      dialogVisible: false, // 控制卡片的显示
      dialogModel: "", // 控制卡片显示的内容
    };
  },
  methods: {
    async getFile(folder) {
      //获取文件信息
      let res = await getFile({ folder: folder });
      res = res.map((file) => {
        file.fileType = file.Name.substring(file.Name.lastIndexOf(".") + 1);
        return file;
      });
      return res;
    },
    async getFolders(folder) {
      //获取文件夹
      let res = await getFolders({ folder });
      res = res.map((folder) => {
        folder.fileType = "文件夹";
        return folder;
      });
      return res;
    },
    async jumpFolder(index) {
      // 路径回退
      // 当点击的不是最外层的链接
      if (this.folder.length - 1 !== index) {
        // 计算需要回跳的次数
        let jumpCount = this.folder.length - 1 - index;
        // 跳！
        while (jumpCount-- !== 0) {
          this.back();
        }
      }
    },
    async toFolder(url) {
      // 进入当前文件夹的子文件夹
      this.folder.push(this.folderLast + "/" + url);
    },
    async back() {
      // 返回上一个路径
      if (this.folder.length > 1) {
        this.folder.pop();
      }
    },
    async fileUpload(data) {
      // 文件上传
      const { file } = data;
      file.fileName = file.name;
      let param = new FormData();
      param.append("files", file);
      param.append("folder", this.folderLast);
      console.log(`output->param`, param);
      await fileUpload(param);
      await this.toUpdateFile(this.folderLast);
      this.handleClose();
    },
    async removeFile(fileFullName) {
      // 删除文件
      await deleteFile(fileFullName);
      this.toUpdateFile(this.folderLast);
    },
    async removeFolder(folderFullName) {
      // 删除文件夹
      await deleteFolder(folderFullName);
      this.toUpdateFolder(this.folderLast);
    },
    async createFolder() {
      // 创建文件夹
      let obj = { folder: this.newFolderName, parentFolder: this.folderLast };
      await createFolder(obj);
      await this.toUpdateFolder(this.folderLast);
      this.handleClose();
    },
    handleClose() {
      // 关闭对话框
      this.dialogVisible = false;
    },
    openDialog(model) {
      // 打开对话框
      this.dialogModel = model;
      this.dialogVisible = true;
    },
    async toUpdateFile(url) {
      // 更新文件数据
      this.files = await this.getFile(url);
    },
    async toUpdateFolder(url) {
      // 更新文件夹数据
      this.folders = await this.getFolders(url);
    },
  },

  computed: {
    folderLast() {
      // 获取文件的最后一个路径
      return this.folder[this.folder.length - 1];
    },
    allFile() {
      // 所有文件
      return [...this.folders, ...this.files];
    },
  },
  watch: {
    // 监听路径的改变,发生改变重新请求文件
    folderLast: {
      handler: async function (newUrl) {
        this.toUpdateFile(newUrl);
        this.toUpdateFolder(newUrl);
      },
      immediate: true,
    },
  },
  created: async function () {},
};
</script>

<style>
.fileSystem {
  margin: 30px;
}

.url-item {
  display: inline-block;
}
</style>

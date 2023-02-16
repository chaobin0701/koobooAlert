<template>
  <div>
    <h2>文件系统</h2>
    <hr />
    <h3>当前目录为:{{ folderFiles }}</h3>
    <h3>文件目录</h3>
    <ul>
      <li v-for="file in files" :key="file.Name">
        <span>文件</span>
        <a :href="file.AbsoluteUrl"> {{ file.Name }}</a>
      </li>
    </ul>
    <hr />
    <h3>当前目录下的文件夹</h3>
    <ul>
      <li v-for="folder in folders" :key="folder.Name">{{ folder.Name }}</li>
    </ul>
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
    return { folderFiles: "//test", files: [], folders: [] };
  },
  methods: {
    async getFile(folderFiles) {
      //获取文件信息
      const res = await getFile({ folder: folderFiles });
      return res;
    },
    async getFolders(folder) {
      //获取文件夹
      const res = await getFolders({ folder });
      return res;
    },
  },
  created: async function () {
    this.files = await this.getFile(this.folderFiles);
    this.folders = await this.getFolders(this.folderFiles);
  },
};
</script>

<style></style>

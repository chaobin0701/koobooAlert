import request from "@/utils/request";
// 查询文件
export function getFile(params) {
  return request({
    url: "api/file",
    method: "get",
    params,
  });
}

// 上传文件
export function fileUpload(data) {
  return request({
    url: "api/file",
    method: "post",
    data,
  });
}
// 删除文件
export function deleteFile(deleteFile) {
  return request({
    url: "api/file",
    method: "delete",
    data: {
      deleteFile,
    },
  });
}

// 创建文件夹
export function createFolder(data) {
  return request({
    url: "api/folder",
    method: "post",
    data,
  });
}
// 删除文件夹
export function deleteFolder(deleteFolder) {
  return request({
    url: "api/folder",
    method: "delete",
    data: {
      deleteFolder,
    },
  });
}
// 查询文件夹
export function getFolders(params) {
  return request({
    url: "api/folder",
    method: "get",
    params,
  });
}

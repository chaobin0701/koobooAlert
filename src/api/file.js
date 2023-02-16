import request from "@/utils/request";
// 查询文件
export function getFile(params) {
  return request({
    url: "http://test.chaobin-gz.sitepapa.com/api/file",
    method: "get",
    params,
  });
}

// 上传文件
export function fileUpload(data) {
  return request({
    url: "http://test.chaobin-gz.sitepapa.com/api/file",
    method: "post",
    data,
  });
}
// 删除文件
export function deleteFile(data) {
  return request({
    url: "http://test.chaobin-gz.sitepapa.com/api/file",
    method: "delete",
    data,
  });
}

// 创建文件夹
export function createFolder(data) {
  return request({
    url: "http://test.chaobin-gz.sitepapa.com/api/folder",
    method: "post",
    data,
  });
}
// 删除文件夹
export function deleteFolder(data) {
  return request({
    url: "http://test.chaobin-gz.sitepapa.com/api/file",
    method: "delete",
    data,
  });
}
// 查询文件夹
export function getFolders(params) {
  return request({
    url: "http://test.chaobin-gz.sitepapa.com/api/folder",
    method: "get",
    params,
  });
}

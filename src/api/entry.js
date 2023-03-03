import request from "@/utils/request";

export function getAllEntryInfo() {
  return request({
    url: "folw/entry",
    method: "get",
  });
}

export function createEntry(data) {
  return request({
    url: "folw/entry",
    method: "post",
    data,
  });
}

export function updateEntry(data) {
  return request({
    url: "folw/entry",
    method: "put",
    data,
  });
}

export function removeEntry(data) {
  return request({
    url: "folw/entry",
    method: "delete",
    data,
  });
}

// 流程处理
export function entryHandler(data) {
  return request({
    url: "api/hr/entry/adit",
    method: "post",
    data,
  });
}

import request from "@/utils/request";

export function getAllEntryInfo() {
  return request({
    url: "api/hr/entry",
    method: "get",
  });
}

export function createEntry(data) {
  return request({
    url: "api/hr/entry",
    method: "post",
    data,
  });
}


export function updateEntry(data) {
  return request({
    url: "api/hr/entry",
    method: "put",
    data,
  });
}

export function removeEntry(data) {
  return request({
    url: "api/hr/entry",
    method: "delete",
    data,
  });
}

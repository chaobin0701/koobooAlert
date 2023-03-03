import request from "@/utils/request";

export function getAllAuditInfo() {
  return request({
    url: "api/audit",
    method: "get",
  });
}

export function createAudit(data) {
  return request({
    url: "api/audit",
    method: "post",
    data,
  });
}

export function updateAudit(data) {
  return request({
    url: "api/audit",
    method: "put",
    data,
  });
}

export function removeAudit(data) {
  return request({
    url: "api/audit",
    method: "delete",
    data,
  });
}
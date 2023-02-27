import request from "@/utils/request";

export function getAllDepartment() {
  return request({
    url: "api/hr/department",
    method: "get",
  });
}

export function createDepartment(data) {
  return request({
    url: "api/hr/department",
    method: "post",
    data,
  });
}

export function removeStaffOne(data) {
  return request({
    url: "api/hr/department",
    method: "delete",
    data,
  });
}
export function updateStaffOne(data) {
  return request({
    url: "api/hr/department",
    method: "put",
    data,
  });
}

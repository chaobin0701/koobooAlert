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

export function removeuserOne(data) {
  return request({
    url: "api/hr/department",
    method: "delete",
    data,
  });
}
export function updateuserOne(data) {
  return request({
    url: "api/hr/department",
    method: "put",
    data,
  });
}

import request from "@/utils/request";

export function getAllStaffInfo() {
  return request({
    url: "api/hr/staff",
    method: "get",
  });
}
export function addStaffOne(data) {
  return request({
    url: "api/hr/staff",
    method: "post",
    data,
  });
}
export function removeStaffOne(_id) {
  return request({
    url: "api/hr/staff",
    method: "delete",
    data: {
      _id,
    },
  });
}
export function updateStaffOne(data) {
  return request({
    url: "api/hr/staff",
    method: "put",
    data,
  });
}

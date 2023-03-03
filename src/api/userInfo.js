import request from "@/utils/request";

export function getAlluserInfo() {
  return request({
    url: "api/hr/user",
    method: "get",
  });
}
export function adduserOne(data) {
  return request({
    url: "api/hr/user",
    method: "post",
    data,
  });
}
export function removeuserOne(_id) {
  return request({
    url: "api/hr/user",
    method: "delete",
    data: {
      _id,
    },
  });
}
export function updateuserOne(data) {
  return request({
    url: "api/hr/user",
    method: "put",
    data,
  });
}

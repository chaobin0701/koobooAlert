import request from "@/utils/request";

// 批准
export function approval(data) {
  return request({
    url: "api/hr/approval",
    method: "post",
    data,
  });
}

// 拒绝
export function refuse(data){
  return request({
    url: "api/hr/approval",
    method: "post",
    data,
  })
}

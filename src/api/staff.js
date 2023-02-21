import request from "@/utils/request";
// 待办事项处理
export function getAllStaffInfo() {
  return request({
    url: "api/hr/staff",
    method: "get",
  });
}
// export function addTodoList(data) {
//   return request({
//     url: "api/todo",
//     method: "post",
//     data,
//   });
// }
// export function removeTodoList(_id) {
//   return request({
//     url: "api/todo",
//     method: "delete",
//     data: {
//       _id,
//     },
//   });
// }
// export function updateTodoList(data) {
//   return request({
//     url: "api/todo",
//     method: "put",
//     data,
//   });
// }

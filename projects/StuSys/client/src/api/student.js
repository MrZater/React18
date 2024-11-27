/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 18:02:33
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-27 17:15:45
 * @FilePath: /projects/StuSys/client/src/api/student.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";

// 查询学生列表
export function getStudentListApi() {
  return request({
    url: "/students/",
    method: "get",
  });
}

// 添加学生
export function addStudentApi(data) {
  return request({
    url: "/students/",
    method: "post",
    data,
  });
}

// 获取学生信息
export function getStudentInfoApi(id) {
  return request({
    url: `/students/${id}/`,
    method: "get",
  })
}

// 删除学生
export function deleteStudentApi(id) {
  return request({
    url: `/students/${id}/`,
    method: "delete",
  })
}

// 编辑学生
export function editStudentApi(id, data) {
  return request({
    url: `/students/${id}/`,
    method: "patch",
    data,
  })
}
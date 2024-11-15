/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 18:02:33
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-15 18:14:09
 * @FilePath: /projects/StuSys/client/src/api/student.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";

export function getStudentListApi() {
  return request({
    url: "/students/",
    method: "get",
  });
}

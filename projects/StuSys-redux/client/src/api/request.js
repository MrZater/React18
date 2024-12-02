/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 17:55:36
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-27 15:06:09
 * @FilePath: /projects/StuSys/client/src/api/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Axios from "axios";

const request = Axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
request.interceptors.request.use((config) => {
  return config;
});

export default request;

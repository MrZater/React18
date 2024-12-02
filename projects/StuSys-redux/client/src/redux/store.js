/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-12-02 11:41:37
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-12-02 11:53:22
 * @FilePath: /client/src/redux/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slices/student";

const store = configureStore({
  reducer: {
    student: studentSlice,
  },
});

export default store;

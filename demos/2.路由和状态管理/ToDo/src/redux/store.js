/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-28 17:25:48
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-29 17:40:06
 * @FilePath: /my-app/src/redux/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./toDoListSlice";

const store = configureStore({
  reducer: {
    toDo: toDoListReducer
  },
});

export default store;

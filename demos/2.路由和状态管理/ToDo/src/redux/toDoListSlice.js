/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-29 16:35:58
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-29 19:53:23
 * @FilePath: /my-app/src/redux/toDoListSlice.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from "@reduxjs/toolkit";

const toDoListSlice = createSlice({
  name: "toDo",
  initialState: {
    list: [
    //   {
    //     content: "学习redux",
    //     status: false,
    //   },
    ],
  },
  reducers: {
    add: (state, { payload }) => {
        state.list.push({
        content: payload,
        status: false,
      });
    },
    del: (state, { payload }) => {
      state.list.splice(payload, 1);
    },
    change: (state, { payload }) => {
      state.list[payload].status = !state.list[payload].status;
    },
  },
});
export const {add, change, del } = toDoListSlice.actions;
export default toDoListSlice.reducer;

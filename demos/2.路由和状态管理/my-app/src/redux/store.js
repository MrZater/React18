/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-28 17:25:48
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-28 18:10:01
 * @FilePath: /my-app/src/redux/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 仓库文件

// 创建仓库
import { createStore } from "redux";
import { toDoReducer } from "./reducers";

export const store = createStore(
  toDoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 14:28:59
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-12-02 11:45:43
 * @FilePath: /projects/StuSys/client/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

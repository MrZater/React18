/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-12 16:02:54
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-13 15:48:16
 * @FilePath: /1.入门篇/react-app-1.1/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
function App() {
  const handleClick = () => {
    console.log("hello1");
  };
  return (
    <>
      <div onClick={handleClick}>Hello</div>
    </>
  );
}

export default App;

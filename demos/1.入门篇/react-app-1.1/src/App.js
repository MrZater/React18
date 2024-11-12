/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-12 16:02:54
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-12 18:09:54
 * @FilePath: /1.入门篇/react-app-1.1/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
function App() {
  const id =  'test'
  const list = [
    1,2,3,4,5,6
  ]
  const element1 = React.createElement('div', {
    id: 'ele2',
    style: {
      color: 'red',
      fontSize: '25px'
    }
  }, 'ele2')
  const element = list.map((item, index) => <div key={index}>{item}</div>)
  return (
    <>
      <div id={id} style={{
        color: '#008c8c',
        // 注释
        'fontSize': '20px'
      }}>Hello</div>
      {element}
      {element1}
    </>
  );
}

export default App;

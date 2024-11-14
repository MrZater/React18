/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-13 18:57:30
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-14 12:24:14
 * @FilePath: /1.入门篇/react-app-1.1/src/components/World.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";

class World extends Component {
  render() {
    return (
      <>
        <div>{this.props.children}</div>
        <div>{this.props.count}</div>
        <button onClick={this.props.changeCount}>增加</button>
      </>
    );
  }
}

export default World;

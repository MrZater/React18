/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-12 16:02:54
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-14 15:07:26
 * @FilePath: /1.入门篇/react-app-1.1/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import Money from "./components/Money";
class App extends Component {
  state = {
    dollar: "",
    rmb: "",
  };
  transformToRMB(value) {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      this.setState({
        dollar: value,
        rmb: value === "" ? "" : (value * 7.3255).toFixed(2),
      });
    } else {
      alert("请输入数字");
    }
  }
  transformToDollar(value) {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      this.setState({
        rmb: value,
        dollar: value === "" ? "" : (value / 7.3255).toFixed(2),
      });
    } else {
      alert("请输入数字");
    }
  }
  render() {
    return (
      <>
        <Money
          text="美元"
          money={this.state.dollar}
          transform={(value) => this.transformToRMB(value)}
        ></Money>
        <Money
          text="人民币"
          money={this.state.rmb}
          transform={(value) => this.transformToDollar(value)}
        ></Money>
      </>
    );
  }
}

export default App;

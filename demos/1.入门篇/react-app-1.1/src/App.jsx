/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-12 16:02:54
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-14 12:22:37
 * @FilePath: /1.入门篇/react-app-1.1/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import Hello from "./components/Hello";
import World from './components/World'
// function App() {
//   const handleClick = () => {
//     console.log("hello1");
//   };
//   return (
//     <>
//       <div onClick={handleClick}>Hello</div>
//     </>
//   );
// }

class App extends Component {
  state = {
    count: 0,
    name: "zhoutao",
    age: 18,
  };
  // handleClick = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   },() => {
  //     console.log(this.state.count);
  //   })
  // }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log('触发修改count');
  }
  render() {
    return (
      <>
        {/* <div>{this.state.count} </div>
        <button onClick={this.handleClick}>+</button> */}
        <Hello name={this.state.name} age={this.state.age} />
        <Hello/>
        <World count={this.state.count} changeCount={this.changeCount}>
          <span>hello,world</span>
        </World>
      </>
    );
  }
}

export default App;

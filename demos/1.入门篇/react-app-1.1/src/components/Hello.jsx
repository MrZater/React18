/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-12 18:35:26
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-14 12:19:42
 * @FilePath: /1.入门篇/react-app-1.1/src/components/Hello.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import PropTypes from "prop-types";

// function Hello(props) {
//     return (
//         <div>
//             hello,My name is{props.name}, I am {props.age} years old
//         </div>
//     );
// }

class Hello extends React.Component {
//   static defaultProps = {
//     name: "zhangsan",
//     age: "18",
//   };
  render() {
    return (
      <div>
        hello,My name is {this.props.name}, I am {this.props.age} years old
      </div>
    );
  }
}

// props默认值
Hello.defaultProps = {
    name: 'zhangsan',
    age: 18
}
// props类型检查
Hello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default Hello;

/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-14 14:49:58
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-14 14:58:16
 * @FilePath: /1.入门篇/react-app-1.1/src/components/Money.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";

const Money = (props) => {
  function handleChange(e) {
    props.transform(e.target.value);
  }
  return (
    <>
      <fieldset>
        <legend>{props.text}</legend>
        <input type="text" value={props.money} onChange={handleChange} />
      </fieldset>
    </>
  );
};

export default Money;

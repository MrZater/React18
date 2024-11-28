/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 16:46:53
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-28 15:02:02
 * @FilePath: /projects/StuSys/client/src/components/About.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function About(props) {
  return (
    <>
      <fieldset>
        <legend>使用说明</legend>
        <p>通过此系统来熟悉 react 以及 react router 的使用</p>
        <NavLink to={'/about/email'} className={'navigation'}>邮箱</NavLink>
        <NavLink to={'/about/tel'} className={'navigation'}>电话</NavLink>
        <Outlet></Outlet>
      </fieldset>
    </>
  );
}

export default About;

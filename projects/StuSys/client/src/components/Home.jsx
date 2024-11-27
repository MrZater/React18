/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 16:46:45
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-27 17:46:38
 * @FilePath: /projects/StuSys/client/src/components/Home.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { getStudentListApi } from "../api/student";
import { useLocation, NavLink } from "react-router-dom";
import Alert from "./Alert";

function Home(props) {
  // state
  const [state, setstate] = useState(null);
  const [studentList, setStudentList] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const location = useLocation()
  const [searchList, setSearchList] = useState([])
  // effect
  useEffect(() => {
    getStudentList();
  }, []);
  // 用于路由页面信息获取
  useEffect(() => {
    const state = location.state
    if (state) {
      setstate(state)
    } else {
      setstate(null)
    }
  }, [location])
  // func
  const handleChangeSearchKey = (name) => {
    setSearchKey(name);
    const newList = studentList.filter((item) => {
      return item.name.match(name)
    })
    setSearchList(newList)
  }
  const getStudentList = async () => {
    const { data = [] } = await getStudentListApi();
    setStudentList(data);
  };
  const list = searchKey ? searchList : studentList;
  const trs = list.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>
          <NavLink to={`/detail/${item.id}`}>详情</NavLink>
        </td>
      </tr>
    )
  })

  const showAlert = state ? (<Alert {...state}></Alert>) : null
  return (
    <>
      {/* 标题 */}
      {/* <h1>学生列表</h1> */}
      {showAlert}
      {/* 搜索 */}
      <input className="form-control" placeholder="搜索" type="text" value={searchKey} onChange={(e) => handleChangeSearchKey(e.target.value)} />
      {/* 表格 */}
      <table className="table table-striped table-hover table-bordered mt-2">
        <thead>
          <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>联系方式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </>)
}

export default Home;

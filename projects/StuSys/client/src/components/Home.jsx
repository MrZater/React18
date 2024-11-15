/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 16:46:45
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-15 18:43:44
 * @FilePath: /projects/StuSys/client/src/components/Home.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { getStudentListApi } from "../api/student";

function Home(props) {
  // state
  const [studentList, setStudentList] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  // effect
  useEffect(() => {
    getStudentList();
  }, []);
  // func
  const handleChangeSearchKey = (e) => {
    setSearchKey(e.target.value);
  }
  const getStudentList = async () => {
    const { data = [] } = await getStudentListApi();
    setStudentList(data);
  };
  const trs = studentList.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>详情</td>
      </tr>
    )
  })
  return (
    <>
      {/* 标题 */}
      <h1>学生列表</h1>
      {/* 搜索 */}
      <input className="form-control" placeholder="搜索" type="text" value={searchKey} onChange={handleChangeSearchKey} />
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

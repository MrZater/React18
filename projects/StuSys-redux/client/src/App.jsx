/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 14:28:59
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-12-02 14:58:25
 * @FilePath: /projects/StuSys/client/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NavLink } from "react-router-dom";
import "./css/App.css";
import RouterConfig from './router/Router'
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getStudengListAsync } from './redux/slices/student'

function App() {
  const dispatch = useDispatch()
  // 数据更新
  useEffect(() => {
    dispatch(getStudengListAsync())
  }, [dispatch])
  return (
    <div id="app" className="container">
      <nav className=" navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <div className="navbar-brand title" href="#">
            学生管理系统
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="navigation" to={"/home"}>
                  首页
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navigation" to={"/about"}>
                  关于我们
                </NavLink>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <NavLink className="navigation" to={"/add"}>
                添加学生
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
      {/* 匹配的路由显示 */}
      <main className="content">
        <RouterConfig></RouterConfig>
      </main>
    </div>
  );
}

export default App;

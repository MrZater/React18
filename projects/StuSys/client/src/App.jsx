/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 14:28:59
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-27 16:54:20
 * @FilePath: /projects/StuSys/client/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Edit from "./components/Edit";
import Detail from "./components/Detail";
import "./css/App.css";
function App() {
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
        <Routes>
          {/* 对应路由 */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<Edit />} />
          <Route path="/update/:id" element={<Edit />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

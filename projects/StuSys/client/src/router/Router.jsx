/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-28 14:50:30
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-28 15:03:46
 * @FilePath: /client/src/router/Router.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import Home from '../components/Home';
import About from '../components/About'
import Email from '../components/Email'
import Tel from '../components/Tel'
import Edit from '../components/Edit';
import Detail from '../components/Detail';
import { Navigate, useRoutes } from 'react-router-dom';

function Router(props) {
    return useRoutes([
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
            children: [
                {
                    path: 'email',
                    element: <Email></Email>
                },
                {
                    path: 'tel',
                    element: <Tel></Tel>
                },
                {
                    path: "",
                    element: <Navigate to={"email"} />,
                }
            ]
        },
        {
            path: "/update/:id",
            element: <Edit />,
        },
        {
            path: "/add",
            element: <Edit />,
        },
        {
            path: "/detail/:id",
            element: <Detail />,
        },
        {
            path: "/",
            element: <Navigate to={"/home"} />,
        }
    ])
}

export default Router;
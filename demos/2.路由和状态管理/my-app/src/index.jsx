/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-28 15:44:45
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-28 19:22:31
 * @FilePath: /my-app/src/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
function render() {
    root.render(
        <App store={store} />
    );
}

store.subscribe(() => {
    render()
})
render()
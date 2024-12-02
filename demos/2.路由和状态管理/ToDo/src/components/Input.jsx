/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-28 17:05:54
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-29 19:42:40
 * @FilePath: /my-app/src/components/Input.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import {add} from '../redux/toDoListSlice'
function Input(props) {
    const [val, setval] = useState('');
    const dispatch = useDispatch()
    const handleAddTodo = () => {
        if (val.trim() === '') {
            return
        }
        // props.store.dispatch(addListAction(val))
        dispatch(add(val))
        setval('')
    }
    function handleChange(e) {
        setval(e.target.value)
    }
    return (
        <div className='form-inline'>
            <input style={{ marginRight: '10px' }} type='text' className='form-control' value={val} onChange={handleChange} placeholder='请输入待办事项'></input>
            <button className='btn btn-primary' onClick={handleAddTodo}>提交</button>
        </div>
    );
}

export default Input;
/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-28 17:06:12
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-29 19:53:38
 * @FilePath: /my-app/src/components/List.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { del, change } from '../redux/toDoListSlice';

function List(props) {
    function handleDeleteItem(index) {
        dispatch(del(index));
    }
    const dispatch = useDispatch();
    const toDo = useSelector((state) => state.toDo);
    const list = toDo.list;
    const lis = list.map((item, index) => {
        return (
            <li key={index} className='text-primary' style={{
            }}>
                <span onClick={() => dispatch(change(index))} className={['item', item.status ? 'completed': ''].join(' ')}>{item.content}</span>
                <button type='button' className='close' onClick={() => handleDeleteItem(index)}>&times;</button>
            </li>
        )
    })
    return (
        <ul style={{ marginTop: '20px' }}>
            {lis}
        </ul>
    );
}

export default List;
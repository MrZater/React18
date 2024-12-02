/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-27 15:44:01
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-12-02 17:34:09
 * @FilePath: /client/src/components/Detail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { deleteStudentApi } from '../api/student'
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudentAsync } from '../redux/slices/student'

function Detail(props) {
    const dispatch = useDispatch()
    const studentList = useSelector(state => state.student.studentList)
    // hooks
    const param = useParams()
    const navigate = useNavigate()
    const [id] = useState(param.id);
    const [student, setstudent] = useState({});
    useEffect(() => {
        const stuItem = studentList.find(item => item.id === id) || {}
        setstudent(stuItem)
    }, [id, studentList])
    const deleteStu = (id) => {
        if (window.confirm("确定删除吗？")) {
            dispatch(deleteStudentAsync(id))
            navigate('/home', {
                state: {
                    type: 'info',
                    alert: '学生删除成功'
                }
            })
        }
    }
    return (
        <div className="details container">
            <button className="btn btn-default" onClick={() => navigate("/home")}>返回</button>
            <h1 className="page-header">
                {student.name}
                <span className="pull-right">
                    <button className="btn btn-primary" onClick={() => navigate(`/update/${student.id}`)} style={{ marginRight: 10 }}>修改</button>
                    <button className="btn btn-danger" onClick={() => deleteStu(student.id)}>删除</button>
                </span>
            </h1>
            {/* 第一组 */}
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-phone">电话：{student.phone}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-envelope">邮箱：{student.email}</span>
                </li>
            </ul>
            {/* 第二组 */}
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-book">文化水平：{student.education}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-flag">毕业院校：{student.graduationschool}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-briefcase">专业：{student.profession}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-user">个人简介：{student.profile}</span>
                </li>
            </ul>
        </div>
    );
}

export default Detail;
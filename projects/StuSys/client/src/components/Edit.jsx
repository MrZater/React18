/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-11-15 16:47:01
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-11-27 17:19:53
 * @FilePath: /client/src/components/Edit.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
 */
import React, { useEffect, useState } from 'react';
import { addStudentApi, getStudentInfoApi, editStudentApi } from '../api/student'
import { useNavigate, useParams } from 'react-router-dom';
function Edit(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const [student, setStudent] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        education: '本科',
        graduationschool: '',
        profession: '',
        profile: ''
    });
    useEffect(() => {
        if (id) {
            getStudentInfoApi(id).then(resp => {
                setStudent(resp.data)
            })
        } else {
            setStudent({
                name: '',
                age: '',
                phone: '',
                email: '',
                education: '本科',
                graduationschool: '',
                profession: '',
                profile: ''
            })
        }
    }, [id])
    // 更新学生信息
    const updateStuInfo = (value, key) => {
        if (key === 'age' && isNaN(value)) {
            return
        }
        setStudent({
            ...student,
            [key]: value
        })
    }
    // 提交
    const handleSubmitInfo = async (e) => {
        e.preventDefault();
        for (const key in student) {
            if (!student[key]) {
                alert('请填写完整信息')
                return
            }
        }
        let resp
        if (id) {
            resp = await editStudentApi(id, student)
        } else {
            resp = await addStudentApi(student)
        }
        if (resp.status === 200 || resp.status === 201) {
            navigate('/home', {
                state: {
                    alert: id ? '编辑成功' : '添加成功',
                    type: 'success'
                }
            })
        } else {
            const err = resp.status === 201 ? '该学生已存在' : id ? '编辑失败' : '添加失败'
            alert(err)
        }
    }
    return (
        <>
            <div className="container">
                {/* 标题 */}
                <h1 className="page-header">{id ? '编辑学生' : '添加学生'}</h1>
                <form id="myForm" onSubmit={handleSubmitInfo}>
                    <div className="well">
                        <div className="form-group">
                            <label>姓名</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="请填写用户姓名"
                                value={student.name}
                                onChange={(e) => updateStuInfo(e.target.value, 'name')}
                            />
                        </div>
                        <div className="form-group">
                            <label>年龄</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="请填写用户年龄"
                                value={student.age}
                                onChange={(e) => updateStuInfo(e.target.value, 'age')}
                            />
                        </div>
                        <div className="form-group">
                            <label>电话</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="请填写用户电话号码"
                                value={student.phone}
                                onChange={(e) => updateStuInfo(e.target.value, 'phone')}
                            />
                        </div>
                        <div className="form-group">
                            <label>邮箱</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="请填写用户邮箱地址"
                                value={student.email}
                                onChange={(e) => updateStuInfo(e.target.value, 'email')}
                            />
                        </div>
                        <div className="form-group">
                            <label>学历</label>
                            <select
                                className="form-control"
                                value={student.education}
                                onChange={(e) => updateStuInfo(e.target.value, 'education')}
                            >
                                <option>小学</option>
                                <option>初中或职中</option>
                                <option>高中或职高</option>
                                <option>专科</option>
                                <option>本科</option>
                                <option>硕士</option>
                                <option>博士</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>毕业学校</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="请填写用户毕业院校"
                                value={student.graduationschool}
                                onChange={(e) => updateStuInfo(e.target.value, 'graduationschool')}
                            />
                        </div>
                        <div className="form-group">
                            <label>职业</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="请填写用户从事的相关职业"
                                value={student.profession}
                                onChange={(e) => updateStuInfo(e.target.value, 'profession')}
                            />
                        </div>
                        <div className="form-group">
                            <label>个人简介</label>
                            <textarea
                                className="form-control"
                                rows="10"
                                placeholder="请简单的介绍一下你自己，包括兴趣、爱好等信息..."
                                value={student.profile}
                                onChange={(e) => updateStuInfo(e.target.value, 'profile')}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">确认{id ? '修改' : '添加'}</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Edit;
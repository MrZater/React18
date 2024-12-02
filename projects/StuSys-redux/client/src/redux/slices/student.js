/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-12-02 11:42:58
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-12-02 18:01:18
 * @FilePath: /client/src/redux/slices/student.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getStudentListApi,
  deleteStudentApi,
  addStudentApi,
  editStudentApi,
} from "../../api/student";
export const getStudengListAsync = createAsyncThunk(
  "student/getStudentListAsync",
  async (_, thunkApi) => {
    const { data = [] } = await getStudentListApi();
    thunkApi.dispatch(setStudentList(data));
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "student/deleteStudentAsync",
  async (payload, thunkApi) => {
    await deleteStudentApi(payload);
    thunkApi.dispatch(deleteStudent(payload));
  }
);
export const addStudentAsync = createAsyncThunk(
  "student/addStudentAsync",
  async (payload, thunkApi) => {
    const { data = {} } = await addStudentApi(payload);
    thunkApi.dispatch(addStudent(data));
  }
);
export const updateStudentAsync = createAsyncThunk(
  "student/updateStudentAsync",
  async (payload, thunkApi) => {
    const {student, id} = payload
    const { data = {} } = await editStudentApi(id, student);
    thunkApi.dispatch(updateStudent(data));
  }
);

const student = createSlice({
  name: "student",
  initialState: {
    studentList: [],
  },
  reducers: {
    setStudentList: (state, { payload }) => {
      state.studentList = payload;
    },
    deleteStudent: (state, { payload }) => {
      state.studentList = state.studentList.filter(
        (item) => item.id !== payload
      );
    },
    addStudent(state, { payload }) {
      state.studentList.push(payload);
    },
    updateStudent(state, { payload }) {
      state.studentList = state.studentList.map((item) =>
        item.id === payload.id ? payload : item
      );
    },
  },
});
export default student.reducer;
export const { setStudentList, deleteStudent, addStudent, updateStudent } =
  student.actions;

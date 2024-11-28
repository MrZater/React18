// 生产action对象的函数，action creater

import { ADD, DEL, CHANGE } from "./actionType";

export const addListAction = (newItem) => {
  return {
    type: ADD,
    data: newItem,
  };
};

export const delListAction = (index) => {
  return {
    type: DEL,
    data: index,
  };
};

export const changeListAction = (index) => {
  return {
    type: CHANGE,
    data: index,
  };
};

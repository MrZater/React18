// reducer状态
import { ADD, DEL, CHANGE } from "./actionType";

let defaultState = {
  toDoList: [],
};

/**
 * @description: reducer函数
 * @param {*} state 初始状态
 * @param {*} action 动作
 */
export function toDoReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      const arr = [...state.toDoList];
      arr.push({
        content: action.data,
        status: false,
      });
      return {
        ...state,
        toDoList: arr,
      };
    }
    case DEL: {
      const arr = [...state.toDoList];
      arr.splice(action.data, 1);
      return {
        ...state,
        toDoList: arr,
      };
    }
    case CHANGE: {
      const arr = [...state.toDoList];
      arr[action.data].status = !arr[action.data].status;
      return {
        ...state,
        toDoList: arr,
      };
    }
    default: {
      return state;
    }
  }
}

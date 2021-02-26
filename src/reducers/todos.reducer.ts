import {
  addTodoTypes,
  ADD_TODO,
  toggleTodoTypes,
  TOGGLE_TODO,
} from "../actions/todo.action";

export interface todoTypes {
  text: string;
  completed: boolean;
}

type actionTypes = addTodoTypes | toggleTodoTypes;

// 此处的state指todos列表
export const todos = (state: todoTypes[] = [], action: actionTypes) => {
  switch (action.type) {
    // 新增一条todo
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }];

    // 切换todo项的状态
    case TOGGLE_TODO:
      return state.map((item: todoTypes, index: number) => {
        if (index === action.index) {
          console.log(index);
          return { ...item, ...{ completed: !item.completed } };
        }
        return item;
      });
    // 建议默认返回state，当action未知时作为处理方法
    default:
      return state;
  }
};

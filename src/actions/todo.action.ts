// 定义ADD_TODO的类型，在小型项目中可以使用string字符串或者不定义
export const ADD_TODO = "ADD_TODO"; // 增加todo
export const TOGGLE_TODO = "TOGGLE_TODO"; // 切换todo
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"; // 设置可见过滤器

export interface addTodoTypes {
  type: typeof ADD_TODO;
  text: string;
}

export interface toggleTodoTypes {
  type: typeof TOGGLE_TODO;
  index: number;
}

export interface setVisibilityFilterTypes {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL", // 显示所有
  SHOW_COMPLETED: "SHOW_COMPLETED", // 显示完成的
  SHOW_ACTIVE: "SHOW_ACTIVE", // 显示未完成的
};

// 添加一个todo信息
export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    text,
  };
};

// 切换todo
export const toggleTodo = (index: number) => {
  return {
    type: TOGGLE_TODO,
    index,
  };
};

// 设置todo信息可见
export const setVisibilityFilter = (filter: string) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};

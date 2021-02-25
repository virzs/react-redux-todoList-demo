import { createStore } from "redux";
import todoApp from "../reducers/todo.reducers";

// 建议全局只有一个store，使用多个reducer处理数据
// createStore第二个选项会设置state的初始状态
export const store = createStore(todoApp);

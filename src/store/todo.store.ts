import { createStore } from "redux";
import todoApp from "../reducers/todo.reducers";

// 建议全局只有一个store，使用多个reducer处理数据
// createStore第二个选项会设置state的初始状态
export const store = createStore(todoApp, {
  visibilityFilter: "SHOW_ALL",
  todos: [],
});
/**
 * 展示组件：
 * 显示todos中数据生成的列表
 * 显示单个todo信息完成状态不同时的效果
 * 显示根据状态切换todo类型的按钮
 */

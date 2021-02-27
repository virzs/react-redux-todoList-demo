import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todos } from "../reducers/todos.reducer";
import { visibilityFilter } from "../reducers/visibilityFilter.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

// 将该函数验证设为any或具体类型可跳过persistStore函数的类型验证
// persistReducer<any,any>(xxx,xxx)
const todoAppPersist = persistReducer<any, any>(persistConfig, todoApp);

// 建议全局只有一个store，使用多个reducer处理数据
// createStore第二个选项会设置state的初始状态
export const store = createStore(todoAppPersist);

export const persist = persistStore(store);
/**
 * 展示组件：
 * 显示todos中数据生成的列表
 * 显示单个todo信息完成状态不同时的效果
 * 显示根据状态切换todo类型的按钮
 */

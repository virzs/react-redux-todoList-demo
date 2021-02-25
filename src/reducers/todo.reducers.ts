import { combineReducers } from "redux";
import { todos } from "./todos.reducer";
import { visibilityFilter } from "./visibilityFilter.reducer";

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;

import { List } from "@fluent-windows/core";
import React from "react";
import { todoTypes } from "../reducers/todos.reducer";
import Todo from "./Todo";
// 整体todo列表组件
interface TodoListPropTypes {
  todos: todoTypes[];
  onTodoClick: (index: number) => void;
}

const TodoList = (props: TodoListPropTypes) => {
  return (
    <List>
      {props.todos.map((todo: todoTypes, index: number) => {
        return (
          <Todo
            key={index}
            {...todo}
            onClick={() => props.onTodoClick(index)}
          ></Todo>
        );
      })}
    </List>
  );
};

export default TodoList;

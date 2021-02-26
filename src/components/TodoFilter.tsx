import { connect } from "react-redux";
import {
  stateTypes,
  toggleTodo,
} from "../actions/todo.action";
import { todoTypes } from "../reducers/todos.reducer";
import TodoList from "./TodoList";

interface TodoFilterTypes {
  active: string;
  todos: todoTypes[];
  todoClick: (index: number) => void;
}

//根据类型过滤todos信息
const getVisibileTodos = (todos: todoTypes[], filter: string) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter((t: todoTypes) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t: todoTypes) => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};

// 将state的内容映射到props中
const mapStateToProps = (state: stateTypes) => {
  return {
    todos: getVisibileTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    todoClick: (index: number) => {
      dispatch(toggleTodo(index));
    },
  };
};

const TodoFilter = (props: TodoFilterTypes) => {
  return (
    <TodoList
      todos={props.todos}
      onTodoClick={(index: number) => props.todoClick(index)}
    ></TodoList>
  );
};

const Filter = connect(mapStateToProps, mapDispatchToProps)(TodoFilter);

export default Filter;

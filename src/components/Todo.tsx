import { Item } from "@fluent-windows/core";
// 单个todo组件
interface TodoPropTypes {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo = (props: TodoPropTypes) => {
  return (
    <Item
      onClick={props.onClick}
      style={{ textDecoration: props.completed ? "line-through" : "none" }}
    >
      {props.text}
    </Item>
  );
};

export default Todo;

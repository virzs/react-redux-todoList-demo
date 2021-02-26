import { Button, Input } from "@fluent-windows/core";
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo.action";

interface addTodoFormPropTypes {
  add: (text: string) => void;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: (text: string) => {
      dispatch(addTodo(text));
    },
  };
};

const AddTodoForm = (props: addTodoFormPropTypes) => {
  const [text, setText] = React.useState("");

  const submit = () => {
    if (!text) return;
    props.add(text);
  };

  return (
    <>
      <Input
        label="新增todo"
        placeholder="请输入todo信息"
        onChange={(value: string) => setText(value)}
      ></Input>
      <Button variant="primary" onClick={() => submit()}>
        提交
      </Button>
    </>
  );
};

const AddTodo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;

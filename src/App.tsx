import { ThemeProvider } from "@fluent-windows/core";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import FilterTabs from "./components/TodoTabs";
import { store } from "./store/todo.store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <FilterTabs></FilterTabs>
        <AddTodo></AddTodo>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

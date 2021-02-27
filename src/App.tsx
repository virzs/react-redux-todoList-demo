import { ThemeProvider } from "@fluent-windows/core";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import FilterTabs from "./components/TodoTabs";
import { persist, store } from "./store/todo.store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <ThemeProvider>
          <FilterTabs></FilterTabs>
          <AddTodo></AddTodo>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

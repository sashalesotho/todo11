import React from "react";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import TodoListItem from "../todo-list-item";
import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Drink Coffee", important: false, id: 3 },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;

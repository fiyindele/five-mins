//import logo from './logo.svg';
import React, { useState } from "react";
import Todo from "./todo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    //To add more todos if necessary
  ]);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onToggle={handleToggle} />
      ))}
    </div>
  );
};

export default App;

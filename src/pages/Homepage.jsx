import "../styles/App.css";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import TodoItem from "../component/TodoItem";
import { useState } from "react";

function Homepage() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    //let newTodos = [todo, ...todos];
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    let updateTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <div>
      <Header></Header>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default Homepage;

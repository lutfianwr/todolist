import React, { Component } from "react";
import { Link } from "react-router-dom";

const TodoItem = (props) => {
  const { todo, removeTodo, completeTodo } = props;

  return (
    <div>
      <div className="p-5 flex bg-red-100 justify-between">
        <div className={todo.completed ? "line-through" : "incomplete"}>
          {todo.text}
        </div>
        <div>
          <button className="p-2" onClick={() => completeTodo(todo.id)}>
            complete
          </button>
          <button className="p-2" onClick={() => removeTodo(todo.id)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

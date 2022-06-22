const TodoItem = (props) => {
  const { todo, removeTodo, completeTodo } = props;

  return (
    <div>
      <div className="sm:flex p-2 m-5 bg-white justify-between align-middle rounded-lg shadow-lg">
        <div className={todo.completed ? "line-through p-5" : "incomplete p-5"}>
          {todo.text}
        </div>
        <div className="flex">
          <button
            className="p-2 px-5 bg-green-500 text-white rounded-l-lg"
            onClick={() => completeTodo(todo.id)}
          >
            complete
          </button>
          <button
            className="p-2 px-5 bg-red-500 text-white rounded-r-lg"
            onClick={() => removeTodo(todo.id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

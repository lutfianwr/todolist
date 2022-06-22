import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <div className=" bg-red-100 w-full content-center items-center">
      <div className="border-pink-800 text-center">
        <div>TODO</div>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="add a todo"
          />
          <button type="submit" className="rounded-r-lg bg-gray-700">
            add todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;

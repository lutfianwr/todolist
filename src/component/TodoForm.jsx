import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <div className="">
      <div className="text-center">
        <div className="p-5 font-bold text-4xl text-white">TODO LIST</div>
        <div className="mb-10 ">
          <form onSubmit={handleSubmit}>
            <input
              className=" p-2 px-5 w-1/2 rounded-l-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="add a new task"
            />
            <button
              type="submit"
              className="rounded-r-lg bg-indigo-900 p-2 px-5 text-white hover:bg-indigo-300 hover:text-indigo-800"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;

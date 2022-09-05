import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input, description, date);
    setInput("");
  };

  return (
    <div className="text-center">
      <div>
        <div className="p-5 font-bold text-4xl text-white">TODO LIST</div>
        <div className="mb-5 md:mb-10 ">
          <form onSubmit={handleSubmit} className="p-5">
            <p className="text-white">What i have to do?</p>
            <input
              className="md:m-2 p-2 px-5 md:w-1/2 w-full rounded-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="add a new task"
            />
            <br></br>
            <p className="text-white">What is the Description of my task?</p>
            <textarea
              className="md:m-2 p-2 px-5 md:w-1/2 w-full rounded-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="add a description"
            />
            <p className="text-white">When is the due date</p>
            <input
              className="md:m-2 p-2 px-5 md:w-1/2 w-full rounded-sm"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="Date"
            />

            <br></br>
            <button
              disabled={(!input, !description, !date)}
              type="submit"
              className="bg-indigo-900 p-2 mt-5 px-5 text-white disabled:bg-gray-600 hover:bg-indigo-300 md:w-1/2 w-full rounded-sm"
            >
              Submit task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;

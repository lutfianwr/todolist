import { useState } from "react";

const DetailForm = (props) => {
  const { submitTodo } = props;
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="bg-[url('../assets/svg.png')] bg-no-repeat">
      <form
        className="lg:mx-20 p-4 rounded-md "
        onSubmit={() => submitTodo(input, description, date)}
      >
        <div className="bg-white p-3 rounded-md mt-5">
          <input
            className="p-2 w-full rounded-md text-2xl bg-gray-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={props.content}
          />
        </div>

        <div className="my-5 p-3 rounded-md bg-white min-h-[50vh] flex flex-col justify-between text-lg shadow-lg">
          <input
            className="bg-gray-300 min-h-[50vh] p-2 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder={props.desc}
          />
          <div className="flex justify-between">
            <input
              className="my-2 p-1 px-5 md:w-1/3 w-full rounded-md bg-gray-300"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="Date"
              placeholder={props.date}
            />
            <div className="pt-2 flex text-white">
              <a>
                <button
                  disabled={(!input, !description, !date)}
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-300 p-2 rounded-sm disabled:bg-gray-600"
                >
                  submit
                </button>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailForm;

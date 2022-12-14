import { BsTrashFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const TodoItem = (props) => {
  const { todo, removeTodo, completeTodo, uncompleteTodo, detailTodo } = props;

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-3">
      <div className="p-2 mx-2 bg-white justify-between align-middle rounded-lg shadow-lg h-full">
        <div
          onClick={() => detailTodo(todo.id)}
          className="p-2 lg:p-5 cursor-pointer hover:bg-indigo-400 rounded-md bg-gray-200 h-auto"
        >
          <div
            className={
              todo.priority === 2 ? "line-through text-lg" : "text-lg font-bold"
            }
          >
            {todo.content}
          </div>
          <div className="text-xs">
            {"date created : "}
            {todo.created.substring(0, 10)}
          </div>
          <div className="text-xs">
            {"due date : "}
            {todo.due.date}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              onClick={() => completeTodo(todo.id)}
              className="m-2 cursor-pointer text-2xl hover:text-indigo-500"
            >
              <BsCheckCircleFill />
            </a>

            <a
              onClick={() => uncompleteTodo(todo.id)}
              className="m-2 cursor-pointer text-3xl align-middle hover:text-indigo-500"
            >
              <MdCancel />
            </a>
          </div>

          <a
            onClick={() => removeTodo(todo.id)}
            className="m-3 cursor-pointer text-2xl align-middle hover:text-indigo-500"
          >
            <BsTrashFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

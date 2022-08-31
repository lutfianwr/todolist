import { BsTrashFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const TodoItem = (props) => {
  const { todo, removeTodo, completeTodo, uncompleteTodo } = props;

  return (
    <div>
      <div className="flex p-2 m-5 lg:mx-28 bg-white justify-between align-middle rounded-lg shadow-lg">
        <div className="">
          <div
            className={
              todo.priority == 2 ? "line-through p-5" : "incomplete p-5"
            }
          >
            {todo.content}
          </div>
          <div className="pl-5 text-xs">{todo.created.substring(0, 10)}</div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <a
              onClick={() => completeTodo(todo.id)}
              className="mx-2 cursor-pointer text-2xl hover:text-indigo-500"
            >
              <BsCheckCircleFill />
            </a>

            <a
              onClick={() => uncompleteTodo(todo.id)}
              className="mx-2 cursor-pointer text-3xl align-middle hover:text-indigo-500"
            >
              <MdCancel />
            </a>
          </div>

          <a
            onClick={() => removeTodo(todo.id)}
            className="m-5 cursor-pointer text-2xl align-middle hover:text-indigo-500"
          >
            <BsTrashFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

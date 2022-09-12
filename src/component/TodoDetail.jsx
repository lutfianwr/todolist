const TodoDetai = (props) => {
  const { edit } = props;

  return (
    <div className="bg-[url('../assets/svg.png')] bg-no-repeat">
      <div className="lg:mx-20 p-4 rounded-md ">
        <div className="bg-white p-3 rounded-md mt-5">
          <div className="p-2 w-full rounded-md text-2xl bg-gray-200 font-bold">
            {props.content}
          </div>
        </div>

        <div className="my-5 p-3 rounded-md bg-white min-h-[50vh] flex flex-col justify-between text-lg shadow-lg">
          {props.desc ? (
            <div className="bg-gray-200 min-h-[50vh] p-2 rounded-md">
              {props.desc}
            </div>
          ) : (
            <div>no description</div>
          )}

          <div className="flex justify-between">
            <div className="text-sm p-2">
              <div>
                {"date created: "}
                {props.created}
              </div>
              {props.date ? (
                <div>
                  {"due date: "}
                  {props.date}
                </div>
              ) : (
                <div>no due date</div>
              )}
            </div>

            <div className="pt-2 flex text-white">
              <a>
                <button
                  className="bg-indigo-500 hover:bg-indigo-300 p-2 rounded-sm"
                  onClick={() => edit()}
                >
                  edit
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetai;

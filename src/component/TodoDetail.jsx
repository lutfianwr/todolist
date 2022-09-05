const TodoDetai = (props) => {
  return (
    <div className="">
      <div className="lg:mx-20 p-4 rounded-md">
        <div className="my-5 p-5 rounded-md bg-white text-2xl font-bold">
          {props.content}
        </div>

        <div className="my-5 p-5 rounded-md bg-white h-96 flex flex-col justify-between text-lg">
          {props.desc ? <div>{props.desc}</div> : <div>no description</div>}
          <div className="text-xs pt-5">
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
        </div>
      </div>{" "}
    </div>
  );
};

export default TodoDetai;

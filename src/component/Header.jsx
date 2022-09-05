import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="bg-indigo-900 w-full text-white flex justify-between">
        <div className="flex font-medium ">
          <div className=" p-5">
            <Link
              className="text-4xl lg:flex-grow px-10 underline underline-offset-8"
              to="/"
            >
              My ToDo list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

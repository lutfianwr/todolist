import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-indigo-900 w-full text-white flex justify-between">
      <div className="flex font-medium ">
        <div className=" p-5">
          <Link
            className="text-4xl lg:flex-grow px-10 underline underline-offset-2"
            to="/"
          >
            ToDo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

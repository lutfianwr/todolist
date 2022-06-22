import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-500 w-full flex text-white">
      <div className=" p-5">
        <Link className="text-sm lg:flex-grow " to="/">
          Home
        </Link>
      </div>
      <div className=" p-5">
        <Link className="text-sm lg:flex-grow " to="/ToDoDetail">
          Detail
        </Link>
      </div>
    </div>
  );
};

export default Header;

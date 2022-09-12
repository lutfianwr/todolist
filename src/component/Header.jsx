import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-indigo-900 w-full">
      <div className="text-center md:text-left p-5">
        <Link
          className="text-2xl px-10 underline underline-offset-8 text-white hover:text-indigo-400"
          to="/"
        >
          My ToDo list
        </Link>
      </div>
    </div>
  );
};

export default Header;

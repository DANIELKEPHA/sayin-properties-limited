import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div className="font-bold text-sm sm:text-xl flex flex-wrap justify-center items-center space-x-2 cursor-pointer">
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src="/src/assets/Sayin_logo.png"
              alt="Sayin Properties Logo"
            />
            <span className="text-gray-700">Sayin Properties</span>
          </div>
        </Link>

        <form className="bg-slate-100 p-2 rounded-lg flex items-center ">
          <input
            className="bg-transparent focus:outline-none w-48 sm:w-64 md:w-80 lg:w-96 text-sm sm:text-base"
            type="text"
            placeholder="Search properties..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="sign-in">
            <li className="text-slate-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

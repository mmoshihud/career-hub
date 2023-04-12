import { NavLink } from "react-router-dom";
import mosh from "../../assets/Images/0000.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <div>
        <img src={mosh} alt="logo" />
      </div>
      <ul className="flex flex-row">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "px-8 text-base font-semibold text-indigo-500"
              : isPending
              ? "pending"
              : "px-8 text-base font-semibold text-gray-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isActive
              ? "px-8 text-base font-semibold text-indigo-500"
              : isPending
              ? "pending"
              : "px-8 text-base font-semibold text-gray-500"
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to="/applied-jobs"
          className={({ isActive, isPending }) =>
            isActive
              ? "px-8 text-base font-semibold text-indigo-500"
              : isPending
              ? "pending"
              : "px-8 text-base font-semibold text-gray-500"
          }
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isActive
              ? "px-8 text-base font-semibold text-indigo-500"
              : isPending
              ? "pending"
              : "px-8 text-base font-semibold text-gray-500"
          }
        >
          Blog
        </NavLink>
      </ul>
      <div>
        <button className="rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-500 px-4 py-4 text-xl font-bold text-white">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;

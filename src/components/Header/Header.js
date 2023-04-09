import logo from "../../assets/Images/CareerHub.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex flex-row">
        <li className="px-8 text-base font-semibold text-gray-500">
          Statistics
        </li>
        <li className="px-8 text-base font-semibold text-gray-500">
          Applied Jobs
        </li>
        <li className="px-8 text-base font-semibold text-gray-500">Blog</li>
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

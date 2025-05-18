import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-evenly bg-indigo-900 px-8 py-2">
      <div>
        <NavLink to="/">
          <img
            className="h-16 w-auto"
            src="/images/logo.png"
            alt="Company Logo"
          />
        </NavLink>
      </div>
      <div>
        <ul className="flex gap-x-6">
          <li>
            <NavLink to="/login" className="text-white text-lg hover:underline">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="text-white text-lg hover:underline">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="w-full flex items-center justify-evenly bg-indigo-900 px-8 py-2">
      <div>
        <NavLink to="/api/agents">
          <img
            className="h-16 w-auto"
            src="/images/logo.png"
            alt="Company Logo"
          />
        </NavLink>
      </div>

      <div>
        <ul className="flex gap-x-6">
          {!isAuthenticated ? (
            <>
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
            </>
          ) : (
            <>
            <li>
                <NavLink to="/api/agents/" className="text-white text-lg hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/api/agents/create-agent" className="text-white text-lg hover:underline">
                  Add Agent
                </NavLink>
              </li>
              <li>
                <NavLink to="/api/files/upload" className="text-white text-lg hover:underline">
                  Upload File
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white text-lg hover:underline cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

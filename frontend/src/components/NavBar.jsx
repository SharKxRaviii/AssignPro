import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
  <div>
    <ul>
      <li><NavLink to="/">LOGO</NavLink></li>
    </ul>
  </div>
  <div>
    <ul>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  </div>
</nav>

  );
};

export default NavBar;

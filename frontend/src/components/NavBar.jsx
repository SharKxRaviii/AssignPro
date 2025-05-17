import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import SignUp from "./SignUp";

const NavBar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Login />
          </li>
          <li>
            <SignUp />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

const Signintab = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/patient/signin">
                Patient <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/doctor/signin">
                Doctor <span className="sr-only"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Signintab;

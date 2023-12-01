import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchInput from "../SearchInput";

const Header = () => {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Gadget Wala
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <SearchInput/>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Sign in
                </NavLink>
              </li>
              
            </ul>
            
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;

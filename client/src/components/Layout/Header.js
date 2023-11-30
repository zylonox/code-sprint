import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink to="/" className="navbar-brand" href="#">
            Gadget-Wala
          </NavLink>
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
              <li className="nav-item active">
                <NavLink to="/" className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" href="#">
                  Register
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="#">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink to="/" className="dropdown-item" href="#">
                    Action
                  </NavLink>
                  <NavLink to="/" className="dropdown-item" href="#">
                    Another action
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink to="/" className="dropdown-item" href="#">
                    Something else here
                  </NavLink>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer1">
      <div className="footer bg-dark text-light p-3">
        <h4 style={{ textAlign: "center" }}>
          ALL RIGHTS RESERVED &copy; shlok{" "}
        </h4>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
          <Link to="/Privacy Policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;

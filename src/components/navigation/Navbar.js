import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="nav-wrapper blue-grey darken-1 "
      style={{ marginBottom: "40px" }}
    >
      <div className="container">
        <Link to="/" className="brand-logo left hide-on-small-only">
          Digital Journal
        </Link>
        <Link to="/" className="brand-logo left hide-on-med-and-up">
          D-Journal
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Log Out</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="signup">Signup</Link>
          </li>

          <li>
            <Link to="account" className="btn btn-floating orange lighten-1">
              account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

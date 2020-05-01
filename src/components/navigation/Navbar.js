import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { isLoggedIn } from "../helpers/isLoggedIn";

const Navbar = () => {
  console.log(isLoggedIn());
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

        {isLoggedIn() ? <LoggedInLinks /> : <LoggedOutLinks />}
      </div>
    </nav>
  );
};

export default Navbar;

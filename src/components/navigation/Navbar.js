import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogedinLinks from "./LogedinLinks";
import LogedOutLinks from "./LogedOutLinks";
import { UserContext } from "../../App";

const Navbar = () => {
  const user = useContext(UserContext);

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

        {user.isLogedin ? <LogedinLinks /> : <LogedOutLinks />}
      </div>
    </nav>
  );
};

export default Navbar;

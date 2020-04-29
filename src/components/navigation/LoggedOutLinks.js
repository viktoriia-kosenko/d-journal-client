import React from "react";
import { Link } from "react-router-dom";

function LoggedOutLinks() {
  return (
    <ul className="right">
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <Link to="signup">Sign up</Link>
      </li>
    </ul>
  );
}

export default LoggedOutLinks;

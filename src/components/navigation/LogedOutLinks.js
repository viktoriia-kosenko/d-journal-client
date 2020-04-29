import React from "react";
import { Link } from "react-router-dom";

function LogedOutLinks() {
  return (
    <ul className="right">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="signup">Signup</Link>
      </li>
    </ul>
  );
}

export default LogedOutLinks;

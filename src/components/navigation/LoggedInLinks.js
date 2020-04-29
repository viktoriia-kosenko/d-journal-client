import React from "react";
import { Link } from "react-router-dom";

function LoggedInLinks() {
  return (
    <ul className="right">
      <li>
        <Link to="/">Log Out</Link>
      </li>
      <li>
        <Link to="account" className="btn btn-floating orange lighten-1">
          account
        </Link>
      </li>
    </ul>
  );
}

export default LoggedInLinks;

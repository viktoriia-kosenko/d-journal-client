import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../helpers/logout";
import { isLoggedIn } from "../helpers/isLoggedIn";

function LoggedInLinks() {
  const [initials, setInitials] = useState("");

  return (
    <ul className="right">
      <li>
        <Link to="/" onClick={() => logout()}>
          Log Out
        </Link>
      </li>
      <li>
        <Link to="account" className="btn btn-floating orange lighten-1">
          AC
        </Link>
      </li>
    </ul>
  );
}

export default LoggedInLinks;

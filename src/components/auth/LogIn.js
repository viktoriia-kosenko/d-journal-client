import React, { useState } from "react";
import Preloader from "./Preloader";
import { getToken } from "../../api/status";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setErrorMsg("Email and password are required!");
    } else {
      setIsLoading(true);

      await getToken(email, password)
        .then((response) => {
          console.log(response);
          sessionStorage.setItem("AuthToken", `Bearer ${response.token}`);
          window.location.href = "/dashboard";
        })
        .catch((err) => {
          err.json().then((json) => {
            console.log(json);
            setErrorMsg(json.general);
            setIsLoading(false);
            setEmail("");
            setPassword("");
          });
        });
    }
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="container z-depth-2 ">
      <form
        className="white"
        style={{ padding: "40px" }}
        onSubmit={handleLogin}
      >
        <h5 className="grey-text text-darken-3">Log In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errorMsg && <div className="center red-text">{errorMsg}</div>}
        <div className="input-field">
          <button className="btn orange lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

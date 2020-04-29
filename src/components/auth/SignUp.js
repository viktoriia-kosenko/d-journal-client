import React from "react";

const SignUp = () => {
  return (
    <div className="container z-depth-2">
      <form className="white" style={{ padding: "40px" }}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>

        <div className="input-field">
          <button className="btn orange lighten-1 z-depth-0">Sign Up</button>
          <div className="center red-text">error will be here</div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { submitNewUser } from '../../api/user';
import Preloader from '../Preloader';
import { getArrayOfErrors } from '../helpers/getArrOfErrors';
import { checkValue } from '../helpers/checkValue';
import { userSchema } from '../helpers/userSchema';

const SignUp = () => {
  const [newUser, setNewUser] = useState(userSchema);
  const [arrOfErrors, setArrOfErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const inputData = { [e.target.id]: e.target.value };
    setNewUser({ ...newUser, ...inputData });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkValue(newUser)) setArrOfErrors(['All fields are required!']);
    else if (newUser.password !== newUser.confirmPassword)
      setArrOfErrors(['Password should match password confirmation!']);
    else {
      setIsLoading(true);
      submitNewUser(newUser)
        .then(response => {
          sessionStorage.setItem('AuthToken', `Bearer ${response.token}`);
          window.location.href = '/dashboard';
        })
        .catch(err => {
          err.json().then(errors => {
            let receivedErrors = getArrayOfErrors(errors);
            setArrOfErrors(receivedErrors);
            setIsLoading(false);
          });
        });
    }
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="container z-depth-2">
      <form
        className="white"
        onSubmit={handleSubmit}
        style={{ padding: '40px' }}
      >
        <h5 className="grey-text text-darken-3">Sign Up</h5>

        <div className="input-field">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            value={newUser.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="confirmPassword">Password confirmation</label>
          <input
            type="password"
            id="confirmPassword"
            value={newUser.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </div>

        {arrOfErrors.length !== 0 && (
          <div className="center red-text">
            {arrOfErrors.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}
        <div className="input-field">
          <button className="btn orange lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

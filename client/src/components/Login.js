import React, { useState } from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [user, setUser] = useState({ username: '', password: '' })

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', user)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubble-page');
      })
      .catch(err => console.log(err))

  }


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={user.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;

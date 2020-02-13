import React, { Component } from 'react';
import { Simulate } from 'react-dom/test-utils';

class Login extends Component {


  render = () => {
    return(
      <div>
        <div>
          <h1>Login</h1>
          <p>Enter your username to login. No need to Sign Up</p>
          <form>
            <input type="text" placeholder="username" />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
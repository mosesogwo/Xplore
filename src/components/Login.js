import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGIN } from '../actions/index'
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
  }
}

  handleChange = event => {
    if (event.target.id === 'username'){
      const username = event.target.value
      this.setState(prevState => ({
        ...prevState,
        username,
      }))
    }
  }

  handleLogin = event => {
    event.preventDefault()
    const { username } = this.state;
    const { login } = this.props;
    if (username !== ''){
      login(username);
      this.props.history.push('/')
    }
  }

  render = () => {
    return(
      <div>
        <div>
          <NavLink to="/">Go back home</NavLink>
          <h1>Login</h1>
          <p>Enter your username to login. No need to Sign Up</p>
          <form>
            <input type="text" placeholder="username" id="username" onChange={this.handleChange} />
            <button type="submit" onClick={this.handleLogin}>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(LOGIN(username))
});

export default connect(null, mapDispatchToProps)(Login);
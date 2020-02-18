import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN, LOGOUT } from '../actions/index';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentDidMount = () => {
    const { username, logout, history } = this.props;
    if (username !== '') {
      logout();
      history.push('/');
    }
  }

  handleChange = event => {
    if (event.target.id === 'username') {
      const username = event.target.value;
      this.setState(prevState => ({
        ...prevState,
        username,
      }));
    }
  }

  handleLogin = event => {
    event.preventDefault();
    const { username } = this.state;
    const { login, history } = this.props;
    if (username !== '') {
      login(username);
      history.push('/');
    }
  }

  render = () => (
    <div>
      <div className="login-div">
        <div className="login-form">
          <h1>Login</h1>
          <p>Enter your username to login. No need to Sign Up</p>
          <form>
            <input type="text" placeholder="Username" id="username" onChange={this.handleChange} />
            <button type="submit" onClick={this.handleLogin}>Login</button>
          </form>
        </div>
        <div className="nav-link">
          <NavLink to="/">Go back home</NavLink>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(LOGIN(username)),
  logout: () => dispatch(LOGOUT()),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  username: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

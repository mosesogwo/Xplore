import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN } from '../actions/index';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  UNSAFE_componentWillMount = () => {
    const { username, login, history } = this.props;
    if (username !== '') {
      login('');
      this.getWishlist();
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

const mapStateToProps = state => ({
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(LOGIN(username)),
});

Login.propTypes = {
  username: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

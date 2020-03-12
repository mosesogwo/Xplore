import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const { username } = props;
  const wishlistNav = () => {
    if (username) {
      return (<li><NavLink to="/wishlist">{username !== '' ? 'WISHLIST' : ''}</NavLink></li>);
    }
    return false;
  };

  return (
    <div className="header-div">
      <div className="logo-div">
        <h1><a href="/">Xplore!</a></h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/packages">PACKAGES</NavLink></li>
          {wishlistNav()}
          <li><NavLink to="/login" className="login">{username !== '' ? 'LOGOUT' : 'LOGIN'}</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.username,
});

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

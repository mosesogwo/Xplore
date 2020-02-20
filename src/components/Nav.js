import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  const { username } = props;
  return (
    <div className="header-div">
      <div className="logo-div">
        <h1>Xplore!</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/login">{username !== '' ? 'LOGOUT' : 'LOGIN'}</NavLink></li>
          <li><NavLink to="/packages">PACKAGES</NavLink></li>
          <li><NavLink to="/wishlist">{username !== '' ? 'MY WISHLIST' : ''}</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  username: state.username,
})

export default connect(mapStateToProps)(Nav);
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = props => {
  const { username } = props;

  return (
    <div className="home">
      <header className="home-header">
        <div className="header-div">
          <div className="logo-div">
            <h1>Xplore!</h1>
          </div>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/login">{username !== '' ? 'Logout' : 'Login'}</NavLink></li>
              <li><NavLink to="/packages">Packages</NavLink></li>
              <li><NavLink to="/wishlist">{ username !== '' ? 'My Wishlist' : '' }</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.username,
});

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Home);

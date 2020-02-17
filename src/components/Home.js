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
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/login">{username !== '' ? 'LOGOUT' : 'LOGIN'}</NavLink></li>
              <li><NavLink to="/packages">PACKAGES</NavLink></li>
              <li><NavLink to="/wishlist">{ username !== '' ? 'MY WISHLIST' : '' }</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="headline">
          <h1>Find your vacation package</h1>
        </div>
        <div className="byline">
          <p>
            Going on a vacation shouldn't be stressful and costly. Find the most exciting and affordable vacation & tour packages.
          </p>
        </div>
        <div className="actionbtn">
          <button type="button">FIND NOW</button>
        </div>
      </main>
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

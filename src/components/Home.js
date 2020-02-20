import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';

const Home = props => {
  const { username, history } = props;

  return (
    <div className="home">
      <header className="home-header">
        <Header />
      </header>
      <main>
        <div className="headline">
          <h1>Find your vacation package</h1>
        </div>
        <div className="byline">
          <p>
            Going on a vacation shouldn&apos;t be stressful and costly.
            Find the most exciting and affordable vacation & tour packages.
          </p>
        </div>
        <div className="actionbtn">
          <button type="button" onClick={() => history.push('/packages')}>FIND NOW</button>
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
  history: PropTypes.instanceOf(Object).isRequired,
};

Home.defaultProps = {

};

export default connect(mapStateToProps)(Home);

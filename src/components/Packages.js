import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SET_PACKAGES, SET_WISHLIST } from '../actions/index';
import Header from './Header';
import Package from './Package';


class Packages extends Component {
  componentDidMount = () => {
    this.getPackages()
  }

  getWishlist = () => {
    const { setWishlist, username } = this.props;
    if (username !== '') {
      // fetch(`https://xplore-api.herokuapp.com/api/v1/wishes?username=${username}`)
      fetch(`http://localhost:3001/api/v1/wishes?username=${username}`)
        .then(res => res.json())
        .then(res => {
          setWishlist(res.data);
        });
    }
  }

  getPackages = () => {
    const { setPackages } = this.props;
    this.getWishlist();
    // fetch('https://xplore-api.herokuapp.com/api/v1/packages')
    fetch('http://localhost:3001/api/v1/packages')
      .then(res => res.json())
      .then(res => {
        setPackages(res.data);
      });
  }

  // addToWishList = id => {
  //   const { username } = this.props;
  //   fetch('https://xplore-api.herokuapp.com/api/v1/wishes/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username,
  //       id,
  //     }),
  //   })
  //     .then(() => {
  //       this.getPackages();
  //       this.render();
  //     });
  // }

  addToWishList = id => {
    const { username } = this.props;
    fetch('http://localhost:3001/api/v1/wishes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        id,
      }),
    })
      .then(() => {
        this.getPackages();
      });
  }

  render = () => {
    const { packages, username, wishlist } = this.props;
    return (
      <div className="packages">
        <Header />
        <div className="intro">
          <h2> Why book a vacation package instead of separate flights and hotels? </h2>
          <p>
            Vacation packages include flight, hotel accomodation and extras
            like airport transfers, tours, meals, networking meetings and
            other activities. You can find rates that save you so much money
            and booking a package saves you the stress of arranging for these items separately.
            {' '}
          </p>
        </div>

        <h3 className="packages-title">AVAILABLE PACKAGES</h3>

        <div className="all-packages">
          {packages.map(packageInfo => (
            <Package packageInfo={packageInfo} addToWishList={this.addToWishList} wishlist={wishlist} username={username} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.packages,
  username: state.username,
  wishlist: state.wishlist,
});

const mapDispatchToProps = dispatch => ({
  setWishlist: wishlist => dispatch(SET_WISHLIST(wishlist)),
  setPackages: packages => dispatch(SET_PACKAGES(packages)),
});

Packages.propTypes = {
  setWishlist: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setPackages: PropTypes.func.isRequired,
  wishlist: PropTypes.instanceOf(Array).isRequired,
  packages: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Packages);

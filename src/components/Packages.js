import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SET_PACKAGES, SET_WISHLIST } from '../actions/index';


class Packages extends Component {
  UNSAFE_componentWillMount = () => {
    this.getPackages();
  }

  getWishlist = () => {
    const { setWishlist, username } = this.props;
    if (username !== '') {
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
    fetch('http://localhost:3001/api/v1/packages')
      .then(res => res.json())
      .then(res => {
        setPackages(res.data);
      });
  }

  addToWishList = id => {
    const { username } = this.props;
    fetch('http://localhost:3001/api/v1/wishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        id,
      }),
    })
      .then(this.getPackages());
  }

  addToWishListBtn = id => {
    const { wishlist, username } = this.props;
    const wishlistIds = wishlist.map(wish => wish.id);
    if (username === '') {
      return false;
    } if (wishlistIds.includes(id)) {
      return (<button type="button" className="added-wish-btn">Added to Wishlist</button>);
    }
    return (<button type="button" onClick={() => this.addToWishList(id)}>Add to Wishlist</button>);
  }

  expandDetails = event => {
    const detailsDiv = event.target.parentNode.parentNode.querySelector('.package-details');
    detailsDiv.classList.toggle('hidden');
  }

  render = () => {
    const { packages, username } = this.props;
    return (
      <div className="packages">
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

        <h3 className="packages-title">SEE AVAILABLE PACKAGES</h3>

        <div className="all-packages">
          {packages.map(packageInfo => (
            <div className="package" onClick={this.expandDetails} onKeyPress={this.expandDetails} key={packageInfo.id}>

              <div className="package-img">
                <img src={packageInfo.image} className="package-img" alt="package" />
              </div>

              <div className="package-brief">
                <div>{packageInfo.destination}</div>
                <div>
                  N
                  {packageInfo.price}
                </div>
              </div>

              <div className="package-details hidden">
                <p>{packageInfo.details}</p>
                { this.addToWishListBtn(packageInfo.id) }
              </div>
            </div>
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

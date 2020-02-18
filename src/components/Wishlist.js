import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SET_WISHLIST } from '../actions';

class Wishlist extends Component {
  componentDidMount = () => {
    const { username, history } = this.props;
    if (username === '') {
      history.push('/login');
    } else {
      this.getWishlist();
    }
  }

  getWishlist = () => {
    const { setWishlist, username } = this.props;
    if (username !== '') {
      fetch(`https://xplore-api.herokuapp.com/api/v1/wishes?username=${username}`)
        .then(res => res.json())
        .then(res => {
          setWishlist(res.data);
        });
    }
  }

  expandDetails = event => {
    const detailsDiv = event.target.parentNode.parentNode.querySelector('.package-details');
    detailsDiv.classList.toggle('hidden');
  }

  render = () => {
    const { wishlist, username } = this.props;
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

        <div className="wishes-intro">
          <h3 className="wishes-title">SEE YOUR WISHLIST</h3>
        </div>

        <div className="all-packages">
          {wishlist.map(packageInfo => (
            <div className="package" onClick={this.expandDetails} onKeyPress={this.expandDetails} role="switch" aria-checked="false" tabIndex="-1" key={packageInfo.id}>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wishlist: state.wishlist,
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  setWishlist: wishlist => dispatch(SET_WISHLIST(wishlist)),
});

Wishlist.propTypes = {
  username: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  setWishlist: PropTypes.func.isRequired,
  wishlist: PropTypes.instanceOf(Array).isRequired,


};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

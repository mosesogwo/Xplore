import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SET_WISHLIST } from '../actions';

class Wishlist extends Component {
  UNSAFE_componentWillMount = () => {
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
      fetch(`http://localhost:3001/api/v1/wishes?username=${username}`)
        .then(res => res.json())
        .then(res => {
          setWishlist(res.data);
        });
    }
  }

  render = () => {
    const { wishlist } = this.props;
    return (
      <div>
        {wishlist.map(packageInfo => (
          <div className="package">
            <div className="package-img">
              <img src={packageInfo.image} width={200} height={200} />
            </div>
            <div className="package-title">
              <p>{packageInfo.destination}</p>
              <p>{packageInfo.price}</p>
            </div>
          </div>
        ))}
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
  history: PropTypes.object.isRequired,
  setWishlist: PropTypes.func.isRequired,
  wishlist: PropTypes.array.isRequired,


};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

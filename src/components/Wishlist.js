import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SET_WISHLIST } from '../actions';
import Header from './Header';
import Package from './Package';

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

  render = () => {
    const { wishlist, username } = this.props;
    return (
      <div className="packages wishes">
        <Header />

        <div className="wishes-intro">
          <h3 className="wishes-title">YOUR WISHLIST</h3>
        </div>
        
        <div className="all-packages">
          {wishlist.map(packageInfo => (
            <Package packageInfo={packageInfo} username={username} wishlist={wishlist} />
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

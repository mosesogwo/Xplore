import React, { Component } from 'react';
import { SET_WISHLIST } from '../actions';
import { connect } from 'react-redux';

class Wishlist extends Component {

  UNSAFE_componentWillMount = () => {
    this.getWishlist()
  }

  getWishlist = () => {
    const { setWishlist, username } = this.props;
    if (username !== ''){
      fetch(`http://localhost:3001/api/v1/wishes?username=${username}`)
      .then(res => res.json())
      .then(res => {
        setWishlist(res.data);
    })
    }
  }

  render = () => {
    const wishlist = this.props.wishlist;
    return(
      <div>
        {wishlist.map(packageInfo => {
          return(
            <div>
              <p>{packageInfo.destination}</p>
              {/* <p>{packageInfo.images}</p> */}
              <p>{packageInfo.price}</p>
            </div>
          )
        })}
        <p>What is wrong here??</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  wishlist: state.wishlist,
  username: state.username,
})

const mapDispatchToProps = dispatch => ({
  setWishlist: wishlist => dispatch(SET_WISHLIST(wishlist))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
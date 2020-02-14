import React, { Component } from 'react';
import { SET_WISHLIST } from '../actions';
import { connect } from 'react-redux';

class Wishlist extends Component {

  UNSAFE_componentWillMount = () => {
    this.getWishlist()
  }

  getWishlist = () => {
    const { setWishlist } = this.props;
    fetch("http://localhost:3001/api/v1/packages")
      .then(res => res.json())
      .then(res => {
        setWishlist(res.data);
    })
  }

  render = () => {
    const wishlist = this.props.wishlist;
    console.log(wishlist)
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
  wishlist: state.wishlist
})

const mapDispatchToProps = dispatch => ({
  setWishlist: packages => dispatch(SET_WISHLIST(packages))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
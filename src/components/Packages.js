import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_PACKAGES } from '../actions/index';
import { SET_WISHLIST } from '../actions/index'


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

  addToWishList = (id) => {
    const { username } = this.props;
    fetch("http://localhost:3001/api/v1/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        id
      })
    })
    .then(this.getPackages())
  }

  addToWishListBtn = (id) => {
    const { wishlist } = this.props;
    const wishlistIds = wishlist.map(wish => wish.id);
    if(wishlistIds.includes(id)){
      return 
    } else {
      return(<button onClick={() => this.addToWishList(id)}>Add to wishlist</button>)
      this.history.push('/packages');
    }
  }

  render = () => {
    const { packages } = this.props;
    console.log(packages);
    return (
      <div>
        {packages.map(packageInfo => (
          <div className="package">
            <div className="package-img">
              <img src={packageInfo.image} width={200} height={200} />
            </div>
            <div className="package-title">
              <p>{packageInfo.destination}</p>
              <p>{packageInfo.price}</p>
              <p>
                { this.addToWishListBtn(packageInfo.id) }
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.packages,
  username: state.username,
  wishlist: state.wishlist
});

const mapDispatchToProps = dispatch => ({
  setWishlist: wishlist => dispatch(SET_WISHLIST(wishlist)),
  setPackages: packages => dispatch(SET_PACKAGES(packages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);

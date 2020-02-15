import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_PACKAGES } from '../actions';
import PackageDetails from './PackageDetails';


class Packages extends Component {
  UNSAFE_componentWillMount = () => {
    this.getPackages();
  }

  getPackages = () => {
    const { setPackages } = this.props;
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
              <button onClick={() => this.addToWishList(packageInfo.id)}>Add to Wishlist</button>
            </div>
          </div>
        ))}
        <p>What is wrong here??</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.packages,
  username: state.username
});

const mapDispatchToProps = dispatch => ({
  setPackages: packages => dispatch(SET_PACKAGES(packages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);

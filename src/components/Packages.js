import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_PACKAGES } from '../actions';


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

  render = () => {
    const { packages } = this.props;
    console.log(packages);
    return (
      <div>
        {packages.map(packageInfo => (
          <div>
            <p>{packageInfo.destination}</p>
            {/* <p>{packageInfo.images}</p> */}
            <p>{packageInfo.price}</p>
          </div>
        ))}
        <p>What is wrong here??</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.packages,
});

const mapDispatchToProps = dispatch => ({
  setPackages: packages => dispatch(SET_PACKAGES(packages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);

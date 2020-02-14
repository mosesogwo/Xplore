import React, { Component } from 'react';
import { SET_PACKAGES } from '../actions';
import { connect } from 'react-redux';


class Packages extends Component {

  UNSAFE_componentWillMount = () => {
    console.log("Will Mount")
    this.getPackages()
  }

  getPackages = () => {
    const { setPackages } = this.props;
    fetch("http://localhost:3001/api/v1/packages")
      .then(res => res.json())
      .then(res => {
        setPackages(res.data);
      })
  }

  render = () => {
    const { packages } = this.props;
    return(
      <div>
        {console.log(packages.length)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  packages: state.packages
})

const mapDispatchToProps = dispatch => ({
  setPackages: packages => dispatch(SET_PACKAGES(packages))
})

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
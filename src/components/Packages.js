import React, { Component } from 'react';
import { SET_PACKAGES } from '../actions';
import { connect } from 'react-redux';

class Packages extends Component {

  componentWillMount = () => {
    console.log("Will Mount")
    this.getPackages()
  }

  getPackages = () => {
    const { setPackages } = this.props;
    fetch("http://localhost:3001/api/v1/packages")
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        setPackages(res.data);
      })
  }

  render = () => {
    return(
      <div>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setPackages: packages => dispatch(SET_PACKAGES(packages))
})

export default connect(null, mapDispatchToProps)(Packages);
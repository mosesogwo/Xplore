import React, { Component } from 'react';

class Packages extends Component {

  componentWillMount = () => {
    console.log("Will Mount")
    this.getPackages()
  }

  getPackages = () => {
    fetch("http://localhost:3001/api/v1/packages")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  render = () => {
    return(
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username,
})

export default Packages;
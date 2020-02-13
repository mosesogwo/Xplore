import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

class Home extends Component {

  render = () => {
    return(
      <Router>
        <div>
          <header>
            <div className='logo-div'>
              <h1>Xplore!</h1>
            </div>
            <nav>
              <ul>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/packages">Packages</NavLink></li>
                <li><NavLink to="/wishlist">My WishList</NavLink></li>
  
              </ul>
            </nav>
          </header>
        </div>
      </Router>
    )
  }
}

export default Home;
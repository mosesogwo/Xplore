import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {

  render = () => {
    return(
        <div>
          <header>
            <div className='logo-div'>
              <h1>Xplore!</h1>
            </div>
            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/packages">Packages</NavLink></li>
                <li><NavLink to="/wishlist">My WishList</NavLink></li> 
              </ul>
            </nav>
          </header>
        </div>
    )
  }
}

export default Home;
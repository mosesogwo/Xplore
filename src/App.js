import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'


function App() {
  return (
    <Router>
      <div className="App">
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          {/* <Route path="/packages" component={Packages} />
          <Route path="/wishlist" component={WishList} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;

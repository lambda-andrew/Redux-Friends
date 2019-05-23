import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/protected">Friends List</NavLink>
          <NavLink to="/friend-form">Add Friend</NavLink>
        </nav>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <PrivateRoute exact path="/friend-form" component={FriendForm} />
      </div>
    </Router>
  );
}

export default App;

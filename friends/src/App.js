import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends List</Link>
        <Link to="/friend-form">Add Friend</Link>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <PrivateRoute exact path="/friend-form" component={FriendForm} />
      </div>
    </Router>
  );
}

export default App;

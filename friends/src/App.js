import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Friends from './components/Friends';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friends' component={Friends}/>
      </div>
    );

  }

}

export default App;

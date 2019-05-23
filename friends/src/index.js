import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { setToken } from './token';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
    rootReducer, applyMiddleware(setToken,thunk)
);

ReactDOM.render(
    <Provider store={store} >
        <Router>
        <App />
        </Router>
    </Provider>
    , document.getElementById('root'));



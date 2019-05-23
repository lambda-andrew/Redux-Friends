import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const SUCCESS_GETTING_FRIENDS = "SUCCESS_GETTING_FRIENDS";

const baseURL = "http://localhost:5000/api";

export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios
    .post(`${baseURL}/login`, creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.payload);
    })
    .catch();
};

export const getFriends = () => dispatch => {
  dispatch({
    type: FETCHING_FRIENDS
  });
  axios
    .get(`${baseURL}/friends`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SUCCESS_GETTING_FRIENDS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const addFriend = friend => dispatch => {
  dispatch({ 
    type: ADD_FRIEND_START 
  });
  return axios
    .post(`${baseURL}/friends`, friend, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response });
      })
};

import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const LOGIN_STARTING = "LOGIN_STARTING";

export const login = creds => dispatch => {
    dispatch({type: LOGIN_STARTING});
    return axios.post(`${baseURL}/login`, creds)
    .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
    })
    .catch(err => {
        console.log(err);
    })
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const getFriends = () => dispatch => {
    dispatch({type: FETCH_DATA_START});
    return axios.get(`${baseURL}/friends`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then(res => {
        console.log(res.data);
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
    })
};

export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADDING_FRIEND_SUCCESS = "ADDING_FRIEND_SUCCESS";

export const addFriend = frens => dispatch => {
    dispatch({type: ADDING_FRIEND});
    return axios.post(`${baseURL}/friends`, frens, {
        
    })
    .then(res => {
        dispatch({type: ADDING_FRIEND_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";

export const deleteFriend = id => dispatch => {
    dispatch({type: DELETE_FRIEND});
    axios.delete(`${baseURL}/friends/${id}`, {
        headers: {Authorization: localStorage.getItem("token")}
    })
    .then(res => {
        dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data})
    })
    .catch(err =>{
        console.log(err)
    })
}
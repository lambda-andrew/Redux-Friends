import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const LOGIN_STARTING = "LOGIN_STARTING";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

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
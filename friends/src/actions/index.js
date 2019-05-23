import axios from 'axios';
import {axiosWithAuth} from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FRIENDS_START = 'FRIENDS_START';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';


export const login = (credentials) => dispatch => {

    dispatch({ type: LOGIN_START });
    return axios
        .post("http://localhost:5000/api/login", credentials)
        .then(res => {
            //    localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
        }
        )
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })

}

export const getFriends = () => dispatch => {
    dispatch({ type: FRIENDS_START });
    const token = localStorage.getItem('userToken');
    return axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: FRIENDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FRIENDS_FAILURE, payload: err })
        })
}


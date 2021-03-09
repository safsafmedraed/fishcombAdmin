import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE, USER_LOADED, AUTH_ERROR } from '../Types/Types';
import axios from 'axios';
import Cookies from 'js-cookie';


//Login 
export const log = ( login, password ) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({
        login,
        password,
    });
    try {
        //const res = await 
       await axios.post('api/user/login', data, config).then((res) => {
            Cookies.set('user', res.data.token);
            const config2 = {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('user'),
                    'content-Type': 'application/json'
                }
            };
              axios.post('api/user/profile', {}, config2).then((res2) => {
                Cookies.get('profile', res2.data.data);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res2.data.data,  
                });
                Cookies.get('profile', res2.data.data);
                
            });
            
        }).catch((err)=>{
            dispatch({
                type: LOGIN_FAIL,
            })  
        });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

//Load User
export const loadUser = () => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('api/user/profile', {}, config);
        dispatch({
            type: USER_LOADED,
            payload: res.data.data
        })
        Cookies.set('profile', res.data.data)
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }

  }
//Logout
export const logout = () => async dispatch => {
    dispatch({
        type: CLEAR_PROFILE
    });
    dispatch({
        type: LOGOUT
    });
}



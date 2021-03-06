import { LOGIN_SUCCESS,LOGIN_FAIL, LOGOUT, USER_LOADED } from '../Types/Types';
import Cookies from 'js-cookie';
const initialState = {
    token: Cookies.get('user'),
    isAuthenticated: null,
    loading: true,
    user: null,
    success :false,
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                user:payload,
                isAuthenticated: true,
            }
        case USER_LOADED:
            return {
                user:payload,
                isAuthenticated: true,
            }  
        case LOGIN_FAIL:
            return {
                ...state, 
                user:null,
                isAuthenticated:null,
                token: null,
                loading: false,
                success: true,
            }
        case LOGOUT:
            Cookies.remove('user');
            Cookies.remove('profile');
            return {
                ...state, 
                user:null,
                isAuthenticated:null,
                token: null,
                loading: false,
                success: true,
            }
        default:
            return state;
    }
}
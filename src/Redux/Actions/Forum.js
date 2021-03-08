import { GET_ALLTHREADS, GET_ONETHREAD }from '../Types/Types';
import axios from 'axios';
import Cookies from 'js-cookie';


export const getAllthreads = () => async dispatch => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    const res = await axios.get('/api/threads',config)
    console.log('***', res.data)
    dispatch({
        type: GET_ALLTHREADS,
        payload: res.data
    })
}

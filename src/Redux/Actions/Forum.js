import { GET_ALLTHREADS, GET_ONETHREAD, ERROR__THREAD, SEARCH_THREAD, SEARCH_THREAD_ERROR }from '../Types/Types';
import axios from 'axios';
import Cookies from 'js-cookie';

//get all threads
export const getAllthreads = () => async dispatch => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    const res = await axios.get('/api/threads',config)
    dispatch({
        type: GET_ALLTHREADS,
        payload: res.data
    })
}

//get one thread 
export const getOneThread = (thread_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/thread/${thread_id}`,config)
        dispatch ({
            type: GET_ONETHREAD,
            payload : res.data
        })
    }catch{
        dispatch({
            type: ERROR__THREAD
        })
    }
}

//Searsh Thread
export const searchThread = (filter,value) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/threads/search`,{filter,value} , config)
        dispatch({
            type: SEARCH_THREAD,
            payload: res.data
        })
    }catch{
        dispatch({
            type: SEARCH_THREAD_ERROR,
        })
    }
}
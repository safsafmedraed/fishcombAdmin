import { GET_ALLEVENTS, ERROR_EVENT, GET_ONEEVENT } from '../Types/Types';
import axios from 'axios'; 
import Cookies from 'js-cookie';

//Get all Event 
export const getAllEvent = () => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get('/api/events', config)
        dispatch({
            type: GET_ALLEVENTS,
            payload: res.data
        })
    }catch(error) {
        dispatch({
            type: ERROR_EVENT,
        })
    }
}

//Get One Event
export const getOneEvent = (event_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/events/${event_id}`,config)
        dispatch({
            type:GET_ONEEVENT,
            payload: res.data.data
        })
    }catch (error){

    }
}
import { GET_ALLPRODUCTS }from '../Types/Types';
import axios from 'axios';
import Cookies from 'js-cookie';


export const getallproducts = () => async dispatch => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    const res = await axios.get('/api/marketplace',config)
    dispatch({
        type: GET_ALLPRODUCTS,
        payload: res.data
    })
}

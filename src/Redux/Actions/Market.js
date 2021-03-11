import { GET_ALLPRODUCTS, GET_ONEPRODUCT, ERROR_PRODUCT }from '../Types/Types';
import axios from 'axios';
import Cookies from 'js-cookie';

//Get all products
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

//Get One Product
export const getOneProduct = (productID) => async dispatch => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get(`/api/marketplace/product/${productID}`, config)
        dispatch({
            type: GET_ONEPRODUCT,
            payload: res.data.data
        })
    }catch (error){ 
        dispatch({
            type: ERROR_PRODUCT
        })
    }
}

import { GET_ALLPRODUCTS }from '../Types/Types';


const initialState = {
    Product: [],
    Products: null,
    loading:true,
    isAuthenticated: false,
    error :{}
};
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALLPRODUCTS:
            return {
                ...state,
                Products:payload,
                loading:false
            }
            default:
                return state;
        }
    }
import { GET_ALLPRODUCTS, GET_ONEPRODUCT }from '../Types/Types';


const initialState = {
    product: null,
    products: null,
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
                products:payload,
                loading:false
            }
        case GET_ONEPRODUCT:
            return{
                ...state,
                product:payload,
                loading:false
            }
            default:
                return state;
        }
    }
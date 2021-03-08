import { GET_ALLTHREADS, SEARCH_THREAD, GET_ONETHREAD }from '../Types/Types';
const initialState = {
    thread: [],
    threads: null,
    loading:true,
    isAuthenticated: false,
    error :{}
};
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALLTHREADS:
            return {
                ...state,
                thread:payload,
                loading:false
            }
        case GET_ONETHREAD: {
            return{
                ...state,
                threads:payload
            }
        }
        case SEARCH_THREAD: {
            return{
                ...state,
                thread: payload,
                loading:false
            }
        }
        default:
            return state;
    }
}
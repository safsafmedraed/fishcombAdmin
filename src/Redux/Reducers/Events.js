import { GET_ALLEVENTS, ERROR_EVENT } from '../Types/Types';

const initialState = {
    events: [],
    event: null,
    loading:true,
    isAuthenticated: false,
    error :{}
};

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALLEVENTS:
            return {
                ...state,
                events:payload,
                loading:false
            }
            default:
                return state;
        }
    }
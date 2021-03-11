import axios from 'axios';
import Cookies from 'js-cookie';



const setAuthToken = token => {
     token =  Cookies.get('user')
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
export default setAuthToken;
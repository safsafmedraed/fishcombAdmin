import { combineReducers } from 'redux';
import Thread from './Thread';
import Marketplace from './Marketplace'
import Auth from './Auth';

export default combineReducers({

    Thread, Auth, Marketplace

});
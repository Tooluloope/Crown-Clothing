import {combineReducers} from 'redux';

import userReducer from './user/user.redux';

export default combineReducers({
    user: userReducer
})
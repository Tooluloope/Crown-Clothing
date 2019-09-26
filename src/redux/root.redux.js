import {combineReducers} from 'redux';

import userReducer from './user/user.redux';
import { CartReducer } from './cart/cart.redux';

export default combineReducers({
    user: userReducer,
    cart: CartReducer
}) 
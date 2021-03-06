import { CartActionType } from "./cart.type";
import { AddItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }
            
    
        default:
            return state ;
    }
}
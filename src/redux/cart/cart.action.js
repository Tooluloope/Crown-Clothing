import { CartActionType } from "./cart.type";

export const ToggleCartHidden = () => ({
    type:CartActionType.TOGGLE_CART_HIDDEN,
})

export const AddItem = (item) => ({
    type: CartActionType.ADD_ITEM,
    payload: item
})
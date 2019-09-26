import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ToggleCartHidden } from '../../redux/cart/cart.action';
import {connect} from 'react-redux';


const CartIcon = ({ToggleCartHidden})=> (
    <div className ='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const matchDispatchToProps = (dispatch) => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

export default connect(null, matchDispatchToProps)(CartIcon);
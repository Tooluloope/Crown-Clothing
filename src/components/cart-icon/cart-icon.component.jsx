import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ToggleCartHidden } from '../../redux/cart/cart.action';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';


const CartIcon = ({ToggleCartHidden,itemCount})=> (
    <div className ='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = state =>({
    itemCount: selectCartItemsCount(state)
})
const matchDispatchToProps = (dispatch) => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

export default connect(mapStateToProps, matchDispatchToProps)(CartIcon);
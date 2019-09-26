import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItem = ({id, name, price, imageUrl, inverted})=> (
    <div className='collection-item'>
        <div className='image'
        style = {{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className='collection-footer' >
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>
        <CustomButton className='custom-button' inverted>ADD TO CART</CustomButton>
    </div>
)
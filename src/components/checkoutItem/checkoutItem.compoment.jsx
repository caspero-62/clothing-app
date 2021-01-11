import React from 'react';

import './checkoutItem.style.scss';

import {connect} from 'react-redux';

import { deleteItem, decreaseQuantity, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, deleteItem, increaseQuantity, decreaseQuantity}) => {

    const {name, quantity, imageUrl, price} = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img 
                    src={imageUrl}
                    alt='item'
                />
            </div>
            <span className="name">{name}</span>
            <span className="quantity"> 
                <span className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</span> 
                <span className="value">{quantity}</span> 
                <span className="arrow" onClick={() => increaseQuantity(cartItem)}>&#10095;</span> 
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => deleteItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    increaseQuantity: item => dispatch(addItem(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
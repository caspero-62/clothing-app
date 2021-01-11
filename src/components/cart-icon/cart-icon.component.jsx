import React from 'react'

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {createStructuredSelector} from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../icons/shopping-bag.svg.svg';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => {
   return (
       <div className='cart-icon' onClick={ toggleCartHidden }>
           <ShoppingIcon className='shopping-icon' />
           <span className='item-count'>{itemCount}</span>
       </div>
   ) 
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
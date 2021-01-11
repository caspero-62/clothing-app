import CartActionTypes from './cart.actiontypes';
import {addItemToCart, deleteItemfromCart, decreaseQuantityOfCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...currentState,
                hidden: !currentState.hidden,
            } 
        case CartActionTypes.ADD_ITEM:
            return {
                ...currentState,
                cartItems: addItemToCart(currentState.cartItems, action.payload)
            }
        case CartActionTypes.DELETE_ITEM:
            return {
                ...currentState,
                cartItems: deleteItemfromCart(currentState.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...currentState,
                cartItems: decreaseQuantityOfCart(currentState.cartItems, action.payload)
            }
        default:
            return currentState
    }
}

export default cartReducer;
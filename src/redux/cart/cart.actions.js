import CartActionTypes from './cart.actiontypes';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
})

export const deleteItem = item => ({
    type: CartActionTypes.DELETE_ITEM,
    payload: item,
})

export const decreaseQuantity = item => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item,
})


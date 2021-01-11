export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const deleteItemfromCart = (cartItems, cartItemToDelete) => {
   const newCartItems = cartItems.filter(cartItem => (
       cartItem.id !== cartItemToDelete.id
   ));

   return newCartItems
}

export const decreaseQuantityOfCart = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToDecrease.id
    );

    if (existingCartItem.quantity === 1) {
       return deleteItemfromCart(cartItems, cartItemToDecrease)
    }
 
    return cartItems.map( cartItem => 
        cartItem.id === cartItemToDecrease.id ?
        {...cartItem, quantity: cartItem.quantity - 1} :
        cartItem
    )
}



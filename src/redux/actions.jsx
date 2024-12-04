export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";


export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const updateQuantity = (productId, quantity) => {
    return {
    type: 'UPDATE_QUANTITY',
    payload: {
        productId,
        quantity,
    },
    };
};

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});


export const changeQuantity = (productId, quantity) => ({
    type: CHANGE_QUANTITY,
    payload: { productId, quantity },
});
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_TO_CART:
      // Verifica si el producto ya está en el carrito
    const item = action.payload;
    const existItem = state.cartItems.find((x) => x.id === item.id);

    if (existItem) {
        return {
        ...state,
        cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
        ),
        };
    } else {
        return {
        ...state,
        cartItems: [...state.cartItems, item],
        };
    }

    case REMOVE_FROM_CART:
    
    return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };

    default: return state;
}
};

export default cartReducer;

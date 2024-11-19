import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer';

// Definición del rootReducer usando combineReducers
const rootReducer = combineReducers({
    cart: cartReducer,
});

// Aquí parece que estás creando el store con solo `cartReducer`, no con `rootReducer`
const store = createStore(rootReducer);

export default store;



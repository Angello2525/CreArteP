// import { createStore, combineReducers } from 'redux';
// import cartReducer from './reducer';

// const rootReducer = combineReducers({
//     cart: cartReducer,
// });

// const store = createStore(rootReducer);

// export default store;


import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;

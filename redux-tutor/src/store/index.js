import { combineReducers, createStore } from 'redux';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';


const rootReeducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer,
})

export const store = createStore(rootReeducer);

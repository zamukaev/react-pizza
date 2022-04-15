import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import goodsReducer from '../goodsReducer';
import cartReducer from "./CartReducer";
const reducers = combineReducers({
	goods: goodsReducer,
	cart: cartReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
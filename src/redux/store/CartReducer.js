import { goodsAPI } from "../../api/api";

const SET_CART = 'SET_CART';

const initialState = {
	cart: [
		{ articul: null, count: null }
	]
};
const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CART:

			return {
				...state,
				cart: state.cart.map(item => {
					if (item.articul === action.articul) {
						return {
							...item,
							count: item.count += 1
						}
					}
					return {
						...item,
						articul: action.articul,
						count: item.count = 1
					}
				})
			}


		default: return state;
	}
};

export const setCartAc = (articul) => ({ type: SET_CART, articul });
export default cartReducer;
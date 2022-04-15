import { goodsAPI } from "../api/api";

const GET_GOODS = 'GET_GOODS';
const GoodsReducer = (state = [], action) => {
	switch (action.type) {
		case GET_GOODS:
			return [
				...action.goods,
			]
		default: return state
	}
};
export const setGoods = (goods) => ({ type: GET_GOODS, goods });
export const getGoods = () => async (dispatch) => {
	const response = await goodsAPI.getGoods();
	dispatch(setGoods(response.data));
};
export default GoodsReducer;
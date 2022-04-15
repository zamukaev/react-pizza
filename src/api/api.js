import axios from 'axios'
const instance = axios.create({
	baseURL: 'https://61ccec9b198df60017aec280.mockapi.io/',
	headers: { 'Content-Type': 'application/json' }
});

export const goodsAPI = {
	getGoods: () => {
		return instance.get('goods');
	},
	setCart: (cart) => {
		return instance.post('cart', cart)
	},
	getCart: () => {
		return instance.get('cart');
	}
};
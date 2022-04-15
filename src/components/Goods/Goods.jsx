import React, { useEffect } from "react";
import styles from './Goods.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "../../redux/goodsReducer";
import Card from "./Card/Card";
import { setCartAc } from "../../redux/store/CartReducer";

const Goods = (props) => {
	const goods = useSelector(state => state.goods);
	const state = useSelector(state => state.cart)
	const dispatch = useDispatch();
	console.log(state)
	const onClickHandle = (e) => {
		e.preventDefault();
		let articul = e.target.getAttribute('data-key');
		dispatch(setCartAc(articul));
	}
	useEffect(() => {
		dispatch(getGoods());
	}, []);
	return (
		<div className={styles.goods}>
			<h2 className={styles.title}>Все пиццы</h2>
			<div className={styles.row}>
				{goods.map(item => (<Card key={item.id}
					title={item.title}
					img={item.img}
					price={item.price}
					cm={item.cm}
					dough={item.dough}
					articul={item.articul}
					onClickHandle={onClickHandle}
				/>))}
			</div>
		</div>
	)
};

export default Goods;
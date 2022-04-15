import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Header/Header'
import { goodsAPI } from '../api/api';
import Categories from './Categories/Categories';
import Goods from './Goods/Goods';
import Select from './Select';

function App() {
	const [activeItem, setActiveItem] = useState(null)
	const onClickHandle = (index) => {
		setActiveItem(index)
	}
	return (
		<div className="wrapper">
			<Header />
			<div className="containt">
				<div className="categories">
					<Categories activeItem={activeItem} onClick={onClickHandle} items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
					<Select />
				</div>

				<Goods />
			</div>
		</div >
	);
}

export default App;

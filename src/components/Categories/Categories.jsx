import React from "react";
import styles from './Categories.module.scss';
const Categories = ({ items, onClick, activeItem }) => {
	return (


		<ul className={styles.popUp}>
			<li onClick={() => onClick(null)} className={`${styles.list} ${activeItem === null ? styles.active : ''}`}>Все</li>
			{items && items.map((item, index) => (<li onClick={() => onClick(index)} key={`${item}_${index}`} className={`${styles.list} ${activeItem === index ? styles.active : ''}`}>{item}</li>))
			}
		</ul >

	)
};

export default Categories;
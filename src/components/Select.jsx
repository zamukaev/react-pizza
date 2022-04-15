import React from 'react';
import { useState } from 'react';
import styles from './Categories/Categories.module.scss';
import classNames from 'classnames';
const Select = () => {
	const [isActive, setIsActive] = useState(false);
	const [optionsActive, setOptionsActive] = useState(1);
	const [optionsValue, setOptionsValue] = useState(null)

	const options = ['популярности', 'по цене', 'по алфавиту'];

	const clickHandle = (index, value) => {
		setOptionsActive(index)
		setOptionsValue(value)
		setIsActive(false)
	};
	return (
		<div className={`${styles.select} ${isActive ? styles.active : ''}`} >
			<div className={styles.header}>
				<div className={styles.current} onClick={() => setIsActive(!isActive)}>Сортировка по: <span>{optionsValue}</span></div>
			</div>
			<div className={styles.body}>
				{options.map((item, index) => (
					<div onClick={() => clickHandle(index, item)}
						key={item + index}
						className={`${styles.option} ${optionsActive === index ? styles.selected : ''}`}>
						{item}
					</div>
				))}

			</div>
		</div >
	)
};
export default Select;
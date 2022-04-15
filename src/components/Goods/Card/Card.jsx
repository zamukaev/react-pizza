import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, img, price, dough, cm, onClickHandle, articul }) => {
	return (
		<div className={styles.card} onClick={onClickHandle}  >
			<div className={styles.image}>
				<img src={img} alt="pizza" />
			</div>
			<div className={styles.name}>
				{title}
			</div>
			<div className={styles.options}>
				<div className={styles.dough}>
					<div className={styles.thin}>{dough[0]}</div>
					<div className={styles.traditionel}>{dough[1]}</div>
				</div>
				<div className={styles.cm}>
					<div className={styles.cm26}>{cm[0]} см.</div>
					<div className={styles.cm30}>{cm[1]} см.</div>
					<div className={styles.cm40}>{cm[2]} см.</div>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.price}>от {price} ₽</div>
				<button className={styles.btn} data-key={articul}>Добавить <span>2</span></button>
			</div>
		</div>
	)
};
export default Card;
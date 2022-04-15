import React from 'react';
import styles from './Header.module.scss';
import logo from '../../static/icons/01.svg';
import Button from '../Button';
const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<a href='#' className={styles.headerLeft}>
					<div className={styles.logo}>
						<img src={logo} alt="logo-pizza" />
					</div>
					<div className={styles.row}>
						<h1 className={styles.title}>
							REACT PIZZA
						</h1>
						<p className={styles.text}>
							самая вкусная пицца во вселенной
						</p>
					</div>
				</a>
				<div className={styles.headerRight}>
					<Button />
				</div>
			</div>
		</header>

	)
};
export default Header;
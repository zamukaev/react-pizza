import styles from './Header/Header.module.scss';
const Button = ({ row }) => {
	return (
		<button href='#' className={styles.row}>
			<div className={styles.totalCost}>
				520 ₽
			</div>
			<div className={styles.cartItem}>
				3
			</div>
		</button>
	)
}
export default Button;
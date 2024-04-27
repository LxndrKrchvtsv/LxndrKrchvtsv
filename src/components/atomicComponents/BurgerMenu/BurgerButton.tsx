import React from 'react';
import Styles from './BurgerButton.module.css';

interface IBurgerButtonProps {
	onClick: () => void;
}

const BurgerButton = ({ onClick }: IBurgerButtonProps) => {
	return (
		<div onClick={onClick} className={Styles.menu__toggle}>
			<div className={Styles.btn}>
				<span className={Styles.line}></span>
			</div>
		</div>
	);
};

export default BurgerButton;

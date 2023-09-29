import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './BackButton.module.css';

const BackButton = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<div className={Styles.button} onClick={handleClick}>
			Back
		</div>
	);
};

export default BackButton;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<>
			<span onClick={handleClick}>Back </span>
		</>
	);
};

export default BackButton;

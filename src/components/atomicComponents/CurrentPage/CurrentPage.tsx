import React from 'react';
import { useLocation } from 'react-router-dom';

const CurrentPage = () => {
	const currentPath = useLocation();

	return (
		<>
			<span>{currentPath.pathname}</span>
		</>
	);
};

export default CurrentPage;

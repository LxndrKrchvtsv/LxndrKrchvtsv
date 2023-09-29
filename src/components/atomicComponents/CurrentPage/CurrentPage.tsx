import React from 'react';
import { useLocation } from 'react-router-dom';

const CurrentPage = () => {
	const currentPath = useLocation();

	return <div>{currentPath.pathname}</div>;
};

export default CurrentPage;

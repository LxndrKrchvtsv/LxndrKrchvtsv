import React from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './CurrentPage.module.css';

const CurrentPage = () => {
	const currentPath = useLocation();

	return <span className={Styles.current__path}>{currentPath.pathname}</span>;
};

export default CurrentPage;

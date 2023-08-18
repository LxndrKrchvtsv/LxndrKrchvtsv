import React from 'react';
import CurrentPage from '../../atomicComponents/CurrentPage/CurrentPage';
import BackButton from '../../atomicComponents/BackButton/BackButton';

import Styles from './BackNavitation.module.css';

const BackNavigation = () => {
	return (
		<div className={Styles.back__navigation__wrapper}>
			<BackButton />
			<CurrentPage />
		</div>
	);
};

export default BackNavigation;

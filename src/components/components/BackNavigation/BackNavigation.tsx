import React, { useLayoutEffect } from 'react';
import CurrentPage from '../../atomicComponents/CurrentPage/CurrentPage';
import BackButton from '../../atomicComponents/BackButton/BackButton';

import Styles from './BackNavitation.module.css';
import { backNavigationCtx } from '../../../utils/helpers';

const BackNavigation = () => {
	useLayoutEffect(() => {
		const gsapContext = backNavigationCtx(Styles.back__navigation__wrapper);

		return () => gsapContext.revert();
	}, []);

	return (
		<div className={Styles.back__navigation__wrapper}>
			<BackButton />
			<CurrentPage />
		</div>
	);
};

export default BackNavigation;

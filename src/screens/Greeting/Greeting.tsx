import React, { useLayoutEffect, useRef } from 'react';
import Styles from './Greeting.module.css';
import { greetingCtx } from '../../utils/helpers';
import { MY_NAME, MY_OCCUPATION } from '../../utils/constants';

const Greeting = () => {
	const greetingRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const context = greetingCtx(greetingRef);

		return () => context.revert();
	}, []);

	return (
		<div ref={greetingRef} className={Styles.greeting__wrapper}>
			<div className={Styles.header__wrapper}>
				<h1 className={Styles.header}>{MY_NAME}</h1>
			</div>
			<div className={Styles.header__wrapper}>
				<h1 className={`${Styles.second__string} ${Styles.header}`}>{MY_OCCUPATION}</h1>
			</div>
		</div>
	);
};

export default Greeting;

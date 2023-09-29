import React, { useLayoutEffect, useRef, useState } from 'react';
import Styles from './Greeting.module.css';
import { greetingCtx, hackerEffectHandler } from '../../utils/helpers';
import { MY_NAME, MY_OCCUPATION } from '../../utils/constants';

const Greeting = () => {
	const [name, setName] = useState(MY_NAME);
	const [experience, setExperience] = useState(MY_OCCUPATION);

	const greetingRef = useRef<HTMLDivElement>(null);

	const nameSpeedChange = 50;
	const experienceSpeedChange = 30;

	useLayoutEffect(() => {
		const gsapContext = greetingCtx(greetingRef);

		requestAnimationFrame(() => hackerEffectHandler(name, setName, nameSpeedChange));
		requestAnimationFrame(() =>
			hackerEffectHandler(experience, setExperience, experienceSpeedChange),
		);

		return () => gsapContext.revert();
	}, []);

	return (
		<div ref={greetingRef} className={Styles.greeting__wrapper}>
			<h1 className={Styles.header} data-text={name}>
				{name}
			</h1>
			<h1 className={`${Styles.second__string} ${Styles.header}`} data-text={experience}>
				{experience}
			</h1>
		</div>
	);
};

export default Greeting;

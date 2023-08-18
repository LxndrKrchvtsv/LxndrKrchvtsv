import { LETTERS_AND_SYMBOLS } from './constants';
import { gsap } from 'gsap';
import { RefObject } from 'react';

export const hackerEffectHandler = (
	text: string,
	setString: (text: string) => void,
	speed: number,
) => {
	let iterations = 0;

	const interval = setInterval(() => {
		if (text) {
			setString(
				text
					.split('')
					.map((_letter, index) => {
						if (index < iterations) return text[index];

						return `${LETTERS_AND_SYMBOLS[Math.floor(Math.random() * 50)]}`;
					})
					.join(''),
			);

			if (iterations >= text.length) clearInterval(interval);

			iterations += 1 / 3;
		}
	}, speed);
};

export const navCtx = (navRef: RefObject<HTMLDivElement>) => {
	return gsap.context(() => {
		const linkElements = navRef?.current?.querySelectorAll('a');
		const linkArray = Array.from(linkElements || []);

		linkArray?.map((link, index) => {
			gsap.to(link, {
				opacity: 1,
				top: 0,
				ease: 'expo.inOut',
				duration: 3.7,
				delay: index * 0.2,
				startAt: {
					top: 140,
				},
			});
		}, navRef);
	});
};

export const greetingCtx = (greetingRef: RefObject<HTMLDivElement>) => {
	return gsap.context(() => {
		const linkElements = greetingRef?.current?.querySelectorAll('h1');
		const linkArray = Array.from(linkElements || []);

		linkArray?.map((link, index) => {
			gsap.to(link, {
				opacity: 1,
				top: 0,
				ease: 'expo.inOut',
				duration: 2.7,
				delay: index * 0.2,
				startAt: {
					top: 140,
				},
			});
		}, greetingRef);
	});
};

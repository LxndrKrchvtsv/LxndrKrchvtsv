import { LETTERS_AND_SYMBOLS } from './constants';
import { gsap } from 'gsap';
import { RefObject } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ItemExperienceStyles from '../screens/Experience/ItemExperience/ItemExperience.module.css';
import Styles from '../screens/Experience/ListExperience/ListExperience.module.css';

export const hackerEffectHandler = (
	text: string,
	setString: (text: string) => void,
	speed: number,
) => {
	let iterations = 0;

	const interval = setTimeout(
		() =>
			setInterval(() => {
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

					iterations += 1 / 4;
				}
			}, speed),
		1300,
	);
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

export const contactCtx = (navRef: RefObject<HTMLDivElement>, headerClassName: string) => {
	return gsap.context(() => {
		const linkElements = navRef?.current?.querySelectorAll('a');
		const linkArray = Array.from(linkElements || []);

		const header = gsap.utils.toArray<HTMLElement>(`.${headerClassName}`);

		gsap.fromTo(
			header,
			{
				opacity: 0,
				left: 140,
			},
			{
				opacity: 1,
				left: 0,
				ease: 'expo.inOut',
				duration: 2,
				delay: 1,
			},
		);

		linkArray?.map((link, index) => {
			gsap.to(link, {
				opacity: 1,
				top: 0,
				ease: 'expo.inOut',
				duration: 2,
				delay: (index + 4) * 0.3,
				startAt: {
					top: 140,
					opacity: 0,
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

export const backNavigationCtx = (navClassName: string) => {
	return gsap.context(() => {
		const backNavElement = gsap.utils.toArray<HTMLElement>(`.${navClassName}`);

		gsap.fromTo(
			backNavElement,
			{
				opacity: 0,
				top: '-2rem',
				ease: 'expo.in',
			},
			{
				opacity: 1,
				top: '1rem',
				ease: 'expo.out',
				duration: 3,
				delay: 2.5,
			},
		);
	});
};

export const listExperienceCtx = (ref: RefObject<HTMLDivElement>): gsap.Context => {
	return gsap.context(() => {
		gsap.registerPlugin(ScrollTrigger);

		const elements = gsap.utils.toArray<HTMLElement>(`.${ItemExperienceStyles.item__wrapper}`);

		ScrollTrigger.create({
			trigger: `.${Styles.list__wrapper}`,
			start: 'top top',
			end: 'bottom bottom',
			scrub: 5,
		});

		const elementsTopPosition = [366, 293, 220, 147, 74];

		elements.forEach((element, index) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: `.${Styles.list__wrapper}`,
					pin: `${Styles.list__wrapper}`,
					start: () => `top+=${index * window.innerHeight} top`,
					end: () => `top+=${(index + 2) * window.innerHeight} center`,
					scrub: 10,
				},
				smoothChildTiming: true,
			});

			gsap.fromTo(
				element,
				{
					opacity: 0,
					top: '100vh',
					ease: 'expo.in',
				},
				{
					opacity: 1,
					top: `calc(100% - ${elementsTopPosition[index]}px)`,
					ease: 'expo.out',
					duration: 2.7,
					delay: (elements.length - index + 4) * 0.3,
				},
			);

			tl.fromTo(
				element,
				{
					background: `repeating-linear-gradient(222deg, rgb(238, 238, 238), rgb(255, 255, 255) 420px)`,
					ease: 'expo.in',
					duration: 25,
				},
				{
					y: `-50vh`,
					duration: 25,
					ease: 'expo.inOut',
				},
			).to(element, { y: `-50vh`, duration: 25, ease: 'expo.inOut' }, '+=1');

			tl.fromTo(
				element.childNodes[0],
				{
					background: `repeating-linear-gradient(330deg, #eeeeee, #ffffff 181px)`,
					ease: 'elastic.out(2.5, 0.7)',
					duration: 25,
				},
				{
					duration: 25,
					ease: 'elastic.out(2.5, 0.7)',
				},
				1.5,
			);
		});

		const borderBottom = gsap.utils.toArray<HTMLElement>(`.${Styles.border__bottom}`);

		gsap.fromTo(
			borderBottom,
			{
				opacity: 0,
				ease: 'expo.in',
			},
			{
				opacity: 1,
				duration: 2.7,
				delay: 2,
			},
		);
	}, ref);
};

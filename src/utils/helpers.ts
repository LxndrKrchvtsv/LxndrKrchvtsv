import { FIRST_VISIT, LOCAL_TRANSITION } from './constants';
import { gsap } from 'gsap';
import { RefObject } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ItemExperienceStyles from '../screens/Experience/ItemExperience/ItemExperience.module.css';
import AstroStyles from '../components/components/ClientInfo/AstroInfo/AstroInfo.module.css';
import GeoInfoStyles from '../components/components/ClientInfo/GeoInfo/GeoInfo.module.css';
import ClockStyles from '../Pages/Home/entities/UserGeographicalDetails/components/Clock/Clock.module.css';
import AboutStyles from '../screens/About/About.module.css';
import ListExperienceStyles from '../screens/Experience/ListExperience/ListExperience.module.css';

const getAnimationStartDelay = () => {
	return sessionStorage.getItem(LOCAL_TRANSITION)
		? 1
		: sessionStorage.getItem(FIRST_VISIT)
		? 9.5
		: 13;
};

export const setSessionStorageItemIsNavigationTransition = () => {
	sessionStorage.setItem(LOCAL_TRANSITION, 'true');
};

export const contactCtx = (navRef: RefObject<HTMLDivElement>, headerClassName: string) => {
	return gsap.context(() => {
		const linkElements = navRef?.current?.querySelectorAll('a');
		const linkArray = Array.from(linkElements || []);
		const header = gsap.utils.toArray<HTMLElement>(`.${headerClassName}`);
		const delay = getAnimationStartDelay();

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
				delay: delay,
			},
		);

		linkArray?.map((link) => {
			gsap.fromTo(
				link,
				{
					opacity: 0,
					top: 140,
				},
				{
					opacity: 1,
					top: 0,
					ease: 'expo.inOut',
					duration: 2,
					stagger: {
						amount: 1,
					},
					delay: delay,
				},
			);
		}, navRef);
	});
};

export const greetingCtx = (greetingRef: RefObject<HTMLDivElement>) => {
	return gsap.context(() => {
		const headersNodes = greetingRef?.current?.querySelectorAll('h1');
		const delay = getAnimationStartDelay();

		headersNodes &&
			gsap.to(headersNodes, {
				opacity: 1,
				top: 0,
				ease: 'expo.inOut',
				duration: 2.7,
				delay: delay,
				stagger: {
					amount: 0.4,
				},
				startAt: {
					top: -140,
				},
			});
	}, greetingRef);
};

export const clientInfoCtx = (clientInfoRef: RefObject<HTMLDivElement>) => {
	return gsap.context(() => {
		const clientInfoWrapper = clientInfoRef?.current;
		const clockWrapper = clientInfoRef?.current?.querySelector(`.${ClockStyles.wrapper}`);
		const geoInfoItems = clientInfoRef?.current?.querySelectorAll(
			`.${GeoInfoStyles.label}, .${GeoInfoStyles.value}`,
		);
		const astroInfoItems = clientInfoRef?.current?.querySelectorAll(
			`.${AstroStyles.label}, .${AstroStyles.value}`,
		);

		const delay = getAnimationStartDelay();

		gsap.fromTo(
			clientInfoWrapper,
			{
				autoAlpha: 0,
			},
			{
				ease: 'expo.inOut',
				duration: 2,
				delay: delay + 1,
				autoAlpha: 1,
			},
		);

		clockWrapper &&
			gsap.fromTo(
				clockWrapper,
				{
					left: -300,
				},
				{
					left: 0,
					ease: 'expo.inOut',
					duration: 2,
					delay: delay + 1.5,
				},
			);

		geoInfoItems &&
			astroInfoItems &&
			gsap.fromTo(
				[geoInfoItems, astroInfoItems],
				{
					top: -140,
				},
				{
					top: 0,
					ease: 'expo.inOut',
					duration: 2,
					delay: delay + 2,
					stagger: {
						amount: 0.4,
					},
				},
			);
	}, clientInfoRef);
};

export const listExperienceCtx = (ref: RefObject<HTMLDivElement>): gsap.Context => {
	return gsap.context(() => {
		gsap.registerPlugin(ScrollTrigger);

		const delay = getAnimationStartDelay();
		const elements = gsap.utils.toArray<HTMLElement>(`.${ItemExperienceStyles.item__wrapper}`);

		ScrollTrigger.create({
			trigger: `.${ListExperienceStyles.list__wrapper}`,
			start: 'top top',
			end: 'bottom bottom',
			scrub: 5,
		});

		const elementsTopPosition = [36.6, 29.3, 22.0, 14.7, 7.4];

		elements.forEach((element, index) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: `.${ListExperienceStyles.list__wrapper}`,
					pin: `${ListExperienceStyles.list__wrapper}`,
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
					top: `calc(100% - ${elementsTopPosition[index]}vh)`,
					ease: 'expo.out',
					duration: 2.7,
					delay: delay + (elements.length - index + 2) * 0.3,
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

		const borderBottom = gsap.utils.toArray<HTMLElement>(
			`.${ListExperienceStyles.border__bottom}`,
		);

		gsap.fromTo(
			borderBottom,
			{
				opacity: 0,
				ease: 'expo.in',
			},
			{
				opacity: 1,
				duration: 2.7,
				delay: delay + 2,
			},
		);
	}, ref);
};

export const gsapContextAbout = (ref: RefObject<HTMLDivElement>): gsap.Context => {
	return gsap.context(() => {
		gsap.registerPlugin(ScrollTrigger);
		const background = `.${AboutStyles.background}`;
		const section = `.${AboutStyles.about__wrapper}`;
		const headerNode = `.${AboutStyles.header}`;
		const picturesNodes = `.${AboutStyles.pictures}`;

		const header = gsap.utils.toArray<HTMLElement>(headerNode);
		const pictures = gsap.utils.toArray<HTMLElement>(picturesNodes);

		const delay = getAnimationStartDelay();

		gsap.fromTo(
			header,
			{
				opacity: 0,
				left: '-2rem',
				ease: 'expo.in',
			},
			{
				opacity: 1,
				left: '1rem',
				ease: 'expo.out',
				duration: 3,
				delay: delay + 1,
			},
		);

		gsap.fromTo(
			pictures,
			{
				opacity: 0,
				ease: 'expo.in',
			},
			{
				opacity: 1,
				ease: 'expo.out',
				duration: 3,
				delay: delay + 1.5,
			},
		);

		gsap.to(background, {
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				onUpdate: (self) => {
					const blurValue = self.progress * 10;

					gsap.to(background, {
						filter: `blur(${blurValue}px)`,
					});
				},
			},
		});
	}, ref);
};

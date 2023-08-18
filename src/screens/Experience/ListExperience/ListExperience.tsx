import React, { useCallback, useLayoutEffect, useRef } from 'react';
import Styles from './ListExperience.module.css';
import ItemExperienceStyles from '../ItemExperience/ItemExperience.module.css';
import experiences from '../../../assets/Content/experiences.json';
import ItemExperience from '../ItemExperience/ItemExperience';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ListExperience = () => {
	const listExperienceWrapperRef = useRef<HTMLDivElement>(null);

	const memoizeCtx = useCallback(
		() =>
			gsap.context(() => {
				gsap.registerPlugin(ScrollTrigger);

				const elements = gsap.utils.toArray<HTMLElement>(
					`.${ItemExperienceStyles.item__wrapper}`,
				);

				ScrollTrigger.create({
					trigger: `.${Styles.list__wrapper}`,
					start: 'top top',
					end: 'bottom bottom',
					scrub: 5,
				});

				elements.forEach((element, i) => {
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: `.${Styles.list__wrapper}`,
							pin: `${Styles.list__wrapper}`,
							start: () => `top+=${i * window.innerHeight} top`,
							end: () => `top+=${(i + 2) * window.innerHeight} center`,
							scrub: 10,
						},
						smoothChildTiming: true,
					});

					tl.fromTo(
						element,
						{
							background: `repeating-linear-gradient(0deg, rgb(21 21 44), #9701f8 8px)`,
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
							background: `repeating-linear-gradient(0deg, black, #39005f 8px)`,
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
			}, listExperienceWrapperRef),
		[],
	);

	useLayoutEffect(() => {
		const ctx = memoizeCtx();

		return () => ctx.revert();
	}, []);

	return (
		<div ref={listExperienceWrapperRef} className={Styles.list__wrapper}>
			{experiences.map((experience, index) => (
				<ItemExperience
					key={index}
					experience={experience}
					index={index}
					length={experiences.length}
				/>
			))}
			<span className={Styles.border__bottom}></span>
		</div>
	);
};

export default ListExperience;

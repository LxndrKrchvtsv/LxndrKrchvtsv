import React, { useLayoutEffect, useRef } from 'react';
import Styles from './Hobbies.module.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Photography from '../../components/components/Photography/Photography';
import Music from '../../components/components/Music/Music';
import PhotographyStyle from '../../components/components/Photography/Photography.module.css';
import MusicStyle from '../../components/components/Music/Music.module.css';

const Hobbies = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);
			const container = containerRef.current;
			const getScrollAmount = (headerWith: number, index: number) => {
				const windowInnerWidth = window.innerWidth;
				return -(windowInnerWidth! - headerWith * (2 - index)) + 'px';
			};

			const elements = gsap.utils.toArray<HTMLElement>(
				`.${MusicStyle.wrapper}, .${PhotographyStyle.wrapper}`,
			);

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					pin: `.${Styles.hobbies__wrapper}`,
					start: () => `top+=${window.innerWidth} bottom`,
					end: () => `top+=${4 * window.innerWidth} bottom`,
					markers: true,
					scrub: 1,
					invalidateOnRefresh: true,
				},
				yoyo: true,
				smoothChildTiming: true,
			});

			elements.forEach((element, index) => {
				const header = element.childNodes[0] as HTMLElement;
				const headerOffsetWidth = header.offsetWidth;

				gsap.fromTo(
					element,
					{
						opacity: 0,
						left: '100%',
						ease: 'expo.in',
					},
					{
						opacity: 1,
						left: `calc(100% - ${headerOffsetWidth * (2 - index)}px)`,
						ease: 'expo.out',
						duration: 2.7,
						delay: (elements.length - index + 4) * 0.3,
					},
				);

				tl.to(element, {
					x: () => getScrollAmount(headerOffsetWidth, index),
					duration: 25,
					ease: 'expo.inOut',
				}).to(
					element,
					{
						x: () => getScrollAmount(headerOffsetWidth, index),
						duration: 25,
						ease: 'expo.inOut',
					},
					'+=1',
				);

				tl.to(element.childNodes[1].childNodes, {
					opacity: 1,
					duration: 10,
					ease: 'expo.in',
					smoothChildTiming: true,
					scrollTrigger: {
						trigger: element,
						start: () => `top 95%`,
						// end: () => `bottom 90%`,
						containerAnimation: tl,
						scrub: 1,
						invalidateOnRefresh: true,
						markers: {
							startColor: 'purple',
							endColor: 'blue',
							fontSize: '24px',
							fontWeight: 'bold',
							indent: 20,
						},
					},
				}).to(element.childNodes[1].childNodes, {
					opacity: 1,
					duration: 10,
					ease: 'expo.out',
					onComplete: () => console.log(element.childNodes[1].childNodes[0]),
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={containerRef} className={Styles.hobbies__wrapper}>
			<Music />
			<Photography />
		</section>
	);
};

export default Hobbies;

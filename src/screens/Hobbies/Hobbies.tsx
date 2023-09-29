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
			const elements = gsap.utils.toArray<HTMLElement>(
				`.${MusicStyle.music__wrapper}, .${PhotographyStyle.photo__wrapper}`,
			);

			ScrollTrigger.create({
				trigger: `.${Styles.hobbies__wrapper}`,
				start: 'top top',
				end: 'bottom bottom',
				scrub: 5,
			});

			const elementsTopPosition = [32, 16];

			elements.forEach((element, index) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: `.${Styles.hobbies__wrapper}`,
						pin: `.${Styles.hobbies__wrapper}`,
						start: () => `top+=${index * window.innerWidth} top`,
						end: () => `top+=${(index + 2) * window.innerWidth} center`,
						scrub: 1,
					},
					smoothChildTiming: true,
				});

				gsap.fromTo(
					element,
					{
						opacity: 0,
						left: '100vw',
						ease: 'expo.in',
					},
					{
						opacity: 1,
						left: `calc(100% - ${elementsTopPosition[index]}rem)`,
						ease: 'expo.out',
						duration: 2.7,
						delay: (elements.length - index + 4) * 0.3,
					},
				);

				tl.fromTo(
					element,
					{
						ease: 'expo.in',
						duration: 25,
					},
					{
						x: `-70vw`,
						duration: 25,
						ease: 'expo.inOut',
					},
				).to(element, { x: `-70vw`, duration: 25, ease: 'expo.inOut' }, '+=1');

				tl.fromTo(
					element.childNodes[1].childNodes,
					{
						opacity: 0,
						duration: 2.5,
						ease: 'expo.in',
					},
					{
						opacity: 1,
						duration: 5,
						ease: 'expo.inOut',
						scrollTrigger: {
							trigger: element,
							containerAnimation: tl,
							start: 'top 87%',
						},
						smoothChildTiming: true,
					},
				);
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

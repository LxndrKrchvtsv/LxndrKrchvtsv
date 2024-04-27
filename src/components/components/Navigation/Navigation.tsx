import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Styles from './Navigation.module.css';
import NavLink from '../../atomicComponents/NavLink/NavLink';

import { LINKS, LOCAL_TRANSITION } from '../../../utils/constants';
import BurgerButton from '../../atomicComponents/BurgerMenu/BurgerButton';
import { gsap } from 'gsap';
import BtnStyles from '../../atomicComponents/BurgerMenu/BurgerButton.module.css';
import { setSessionStorageItemIsNavigationTransition } from '../../../utils/helpers';

const Navigation = () => {
	const navRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const tl = useRef(gsap.timeline({ reversed: true, paused: true }));

	const handleNavItemClick = () => {
		handleSetIsOpen();
		setSessionStorageItemIsNavigationTransition();
	};
	const handleSetIsOpen = () => {
		setIsOpen(!isOpen);
	};

	const removeLocalTransition = () => sessionStorage.removeItem(LOCAL_TRANSITION);

	useEffect(() => {
		addEventListener('beforeunload', removeLocalTransition);
		return () => removeEventListener('beforeunload', removeLocalTransition);
	}, []);

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			const btn = navRef?.current?.querySelector<HTMLDivElement>(`.${BtnStyles.btn}`);

			btn &&
				gsap.fromTo(
					btn,
					{
						right: -100,
					},
					{
						right: 0,
						ease: 'expo.inOut',
						duration: 2,
						delay: 1,
						autoAlpha: 1,
					},
				);
		}, navRef);

		return () => context.revert();
	}, []);

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			const nav = navRef?.current?.querySelector(`.${Styles.wrapper}`);
			const linkArray = Array.from(navRef?.current?.querySelectorAll('a') || []);
			const btn = navRef?.current?.querySelector<HTMLDivElement>(`.${BtnStyles.btn}`);

			if (isOpen) {
				btn?.classList.add(`${BtnStyles.active}`);
			} else {
				btn?.classList.remove(`${BtnStyles.active}`);
			}

			if (nav) {
				tl.current.to(
					nav,
					{
						display: 'block',
						duration: 0.3,
						autoAlpha: 1,
						ease: 'expo.inOut',
					},
					'-=0',
				);
				tl.current.to(
					linkArray,
					{
						opacity: 1,
						top: 0,
						ease: 'expo.inOut',
						duration: 1.3,
						stagger: {
							amount: 0.3,
						},
						startAt: {
							top: 140,
						},
					},
					'-=0.4',
				);

				if (isOpen) {
					tl.current.play();
				} else {
					tl.current.reverse();
				}
			}
		}, navRef);

		return () => {
			context.revert();
		};
	}, [isOpen]);

	return (
		<div ref={navRef} className={Styles.nav__wrapper}>
			<BurgerButton onClick={handleSetIsOpen} />
			<div className={Styles.wrapper}>
				<nav className={Styles.nav}>
					{LINKS.map((link) => (
						<NavLink
							handleNavItemClick={handleNavItemClick}
							key={link.name}
							link={link}
						/>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Navigation;

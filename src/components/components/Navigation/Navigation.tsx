import React, { useLayoutEffect, useRef } from 'react';
import './Navigation.module.css';
import NavLink from '../../atomicComponents/Link/NavLink';

import { LINKS } from '../../../utils/constants';
import { navCtx } from '../../../utils/helpers';

const Navigation = () => {
	const navRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const gsapContext = navCtx(navRef);

		return () => gsapContext.revert();
	}, []);

	return (
		<nav ref={navRef}>
			{LINKS.map((link, index) => (
				<NavLink key={index} name={link} />
			))}
		</nav>
	);
};

export default Navigation;

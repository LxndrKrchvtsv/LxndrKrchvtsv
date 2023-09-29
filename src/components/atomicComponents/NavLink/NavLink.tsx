import React, { useLayoutEffect, useState } from 'react';
import Styles from './Link.module.css';
import { TLinks } from '../../../utils/types';
import { hackerEffectHandler } from '../../../utils/helpers';
import { Link } from 'react-router-dom';

const NavLink = ({ name }: TLinks) => {
	const [linkName, setName] = useState<string>(name);

	const nameSpeedChange = 80;

	useLayoutEffect(() => {
		requestAnimationFrame(() => hackerEffectHandler(linkName, setName, nameSpeedChange));
	}, []);

	return (
		<>
			<div className={Styles.link__wrapper}>
				<Link className={Styles.link} to={linkName.toLowerCase()} data-text={linkName}>
					{linkName}
				</Link>
			</div>
		</>
	);
};

export default NavLink;

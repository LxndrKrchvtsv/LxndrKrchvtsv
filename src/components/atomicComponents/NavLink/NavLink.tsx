import React from 'react';
import Styles from './Link.module.css';
import { NavLinkProps } from '../../../utils/types';
import { Link } from 'react-router-dom';

const NavLink = ({ link, handleNavItemClick }: NavLinkProps) => {
	const { name, value } = link;

	return (
		<>
			<div className={Styles.link__wrapper}>
				<Link
					onClick={handleNavItemClick}
					className={Styles.link}
					to={`/${value.toLowerCase()}`}
				>
					{name}
				</Link>
			</div>
		</>
	);
};

export default NavLink;

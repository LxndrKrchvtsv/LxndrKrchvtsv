import React from 'react';
import Styles from './Link.module.css';
import { TLink } from '../../../utils/types';

const Link = ({ link, name, typeLink = '' }: TLink) => {
	return (
		<div className={Styles.link__wrapper}>
			<a href={typeLink + link} className={Styles.link} target='_blank'>
				{name}
			</a>
		</div>
	);
};

export default Link;

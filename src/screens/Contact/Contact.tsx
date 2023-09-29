import React, { useLayoutEffect, useRef } from 'react';
import Link from '../../components/atomicComponents/Link/Link';
import Styles from './Connect.module.css';
import { CONTACT_DATA } from '../../utils/constants';
import { contactCtx } from '../../utils/helpers';

const Contact = () => {
	const linkRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const gsapContext = contactCtx(linkRef, Styles.contact__header);

		return () => gsapContext.revert();
	}, []);

	return (
		<div className={Styles.contact__wrapper} ref={linkRef}>
			<div className={Styles.header__wrapper}>
				<h2 className={Styles.contact__header}>Contact me!</h2>
			</div>
			<div className={Styles.links__wrapper}>
				{CONTACT_DATA.map(([name, link, typeLink]) => (
					<Link link={link} name={name} typeLink={typeLink} />
				))}
			</div>
		</div>
	);
};

export default Contact;

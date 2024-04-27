import React, { useLayoutEffect, useRef } from 'react';
import AstroInfo from './AstroInfo/AstroInfo';
import GeoInfo from './GeoInfo/GeoInfo';

import Styles from './ClientInfo.module.css';
import Clock from '../../atomicComponents/Clock/Clock';
import { clientInfoCtx } from '../../../utils/helpers';

const ClientInfo = () => {
	const clientInfoRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = clientInfoCtx(clientInfoRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={clientInfoRef} className={Styles.wrapper}>
			<Clock />
			<div className={Styles.content}>
				<GeoInfo />
				<AstroInfo />
			</div>
		</div>
	);
};

export default ClientInfo;

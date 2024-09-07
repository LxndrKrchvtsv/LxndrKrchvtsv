import React, { useLayoutEffect, useRef } from 'react';
import { clientInfoCtx } from '../../../../utils/helpers';
import s from './s.module.css'
import LocationInfoColumn from './components/LocationInfoColumn';
import AstronomicalInfoColumn from './components/AstronomicalInfoColumn';
import Clock from './components/Clock';

const UserGeographicalDetails = () => {
	const clientInfoRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = clientInfoCtx(clientInfoRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={clientInfoRef} className={s.wrapper}>
			<Clock />
			<div className={s.content}>
				<LocationInfoColumn />
				<AstronomicalInfoColumn />
			</div>
		</div>
	);
}

export default UserGeographicalDetails

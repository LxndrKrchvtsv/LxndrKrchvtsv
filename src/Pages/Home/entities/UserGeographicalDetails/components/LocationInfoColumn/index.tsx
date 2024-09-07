import React, { useEffect, useState } from 'react';
import s from './s.module.css'
import { ELocationInfo } from '../../../../../../utils/enums';

const LocationInfoColumn = () => {
	const [state, setState] = useState<any>(null);

	useEffect(() => {
		const fetchGeo = async () => {
			const response = await fetch(
				`https://api.ipgeolocation.io/timezone?apiKey=${process.env.GEOLOCATION_API_KEY}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			return response.json();
		};

		fetchGeo().then((res) => setState(res));
	}, []);

	return (
		<div className={s.wrapper}>
			<div className={s.item}>
				<div className={s.label}>{ELocationInfo.CITY}</div>
				<div className={s.value}>{state?.geo.city}</div>
			</div>
		</div>
	);
}

export default LocationInfoColumn;
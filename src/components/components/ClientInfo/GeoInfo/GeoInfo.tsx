import React, { useEffect, useState } from 'react';
import Styles from './GeoInfo.module.css';
import {
	CITY,
	COUNTRY,
	DATE,
	LATITUDE,
	LONGITUDE,
	PROVINCE,
	TIME_ZONE,
} from '../../../../utils/constants';

const GeoInfo = () => {
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
		<div className={Styles.wrapper}>
			<div className={Styles.item}>
				<div className={Styles.label}>{CITY}</div>
				<div className={Styles.value}>{state?.geo.city}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{PROVINCE}</div>
				<div className={Styles.value}>{state?.geo.state_prov}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{COUNTRY}</div>
				<div className={Styles.value}>{state?.geo.country_name_official}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{DATE}</div>
				<div className={Styles.value}>{state?.date_time_txt.slice(0, -8)}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{TIME_ZONE}</div>
				<div className={Styles.value}>{state?.timezone}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{LATITUDE}</div>
				<div className={Styles.value}>{state?.geo.latitude}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{LONGITUDE}</div>
				<div className={Styles.value}>{state?.geo.longitude}</div>
			</div>
		</div>
	);
};

export default GeoInfo;

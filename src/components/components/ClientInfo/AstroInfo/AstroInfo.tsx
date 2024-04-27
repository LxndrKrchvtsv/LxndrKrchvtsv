import React, { useEffect, useState } from 'react';
import Styles from './AstroInfo.module.css';
import {
	DAY_LENGTH,
	MOONRISE,
	MOONSET,
	SOLAR_NOON,
	SUNRISE,
	SUNSET,
} from '../../../../utils/constants';

const AstroInfo = () => {
	const [state, setState] = useState<any>(null);

	useEffect(() => {
		const fetchAstronomy = async () => {
			const response = await fetch(
				`https://api.ipgeolocation.io/astronomy?apiKey=${process.env.GEOLOCATION_API_KEY}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			return response.json();
		};

		fetchAstronomy().then((res) => setState(res));
	}, []);

	return (
		<div className={Styles.wrapper}>
			<div className={Styles.item}>
				<div className={Styles.label}>{DAY_LENGTH}</div>
				<div className={Styles.value}>{state?.day_length}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{SUNSET}</div>
				<div className={Styles.value}>{state?.sunset}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{SUNRISE}</div>
				<div className={Styles.value}>{state?.sunrise}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{MOONSET}</div>
				<div className={Styles.value}>{state?.moonset}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{MOONRISE}</div>
				<div className={Styles.value}>{state?.moonrise}</div>
			</div>
			<div className={Styles.item}>
				<div className={Styles.label}>{SOLAR_NOON}</div>
				<div className={Styles.value}>{state?.solar_noon}</div>
			</div>
		</div>
	);
};

export default AstroInfo;

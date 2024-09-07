import React, { useEffect, useState } from 'react';
import s from './s.module.css'

const AstronomicalInfoColumn = () => {
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
		<div className={s.wrapper}>
			<div className={s.item}>
				<div className={s.label}><strong>{DAY_LENGTH}</strong></div>
				<div className={s.value}>{state?.day_length}</div>
			</div>
		</div>
	);
}

export default AstronomicalInfoColumn
import React, { useEffect, useState } from 'react';
import Styles from './Clock.module.css';

const Clock = () => {
	const [currentTime, setCurrentTime] = useState<string | null>(null);

	useEffect(() => {
		const updateIntervalMS = 1000;
		const updateCurrentTime = new Date().toLocaleTimeString();

		const intervalId = setInterval(() => setCurrentTime(updateCurrentTime), updateIntervalMS);
		return () => clearInterval(intervalId);
	}, [currentTime]);

	return <div className={Styles.wrapper}>Current Time: {currentTime}</div>;
};

export default Clock;

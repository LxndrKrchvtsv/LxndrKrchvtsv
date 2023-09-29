import React from 'react';
import Styles from './Music.module.css';
import MusicContent from './MusicContent';

const Music = () => {
	return (
		<section className={Styles.music__wrapper}>
			<h1 className={Styles.header}>Music</h1>
			<MusicContent />
		</section>
	);
};

export default Music;

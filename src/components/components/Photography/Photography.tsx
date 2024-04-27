import React from 'react';
import Styles from './Photography.module.css';
import Gallery from './Gallery/Gallery';

const Photography = () => {
	return (
		<section className={Styles.wrapper}>
			<h1 className={Styles.header}>Photo</h1>
			<Gallery />
		</section>
	);
};

export default Photography;

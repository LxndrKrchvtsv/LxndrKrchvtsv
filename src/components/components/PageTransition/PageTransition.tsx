import React from 'react';
import Styles from './PageTransition.module.css';
import { TPageTransition } from '../../../utils/types';
import { motion } from 'framer-motion';
import { PLEASE_STAND_BY } from '../../../utils/constants';

const PageTransition = ({ children }: TPageTransition) => {
	return (
		<>
			{children}
			<motion.h3
				layout
				className={Styles.slide__in}
				initial={{
					y: -1000,
					opacity: 0,
				}}
				animate={{
					y: -1000,
					opacity: 0.5,
				}}
				exit={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 3,
					ease: [1, 0.5, 0.2, 1],
				}}
			>
				{PLEASE_STAND_BY}
			</motion.h3>

			<motion.h3
				layout
				className={Styles.slide__out}
				initial={{
					y: 0,
					opacity: 1,
				}}
				animate={{
					y: -1000,
					opacity: 0.9,
				}}
				exit={{
					y: -1000,
					opacity: 0,
				}}
				transition={{
					duration: 3,
					ease: [0.8, 0.1, 0.1, 1],
					delay: 0.5,
				}}
			>
				{PLEASE_STAND_BY}
			</motion.h3>
		</>
	);
};

export default PageTransition;

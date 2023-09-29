import React from 'react';
import Styles from './ItemExperience.module.css';
import { TExperience } from '../../../utils/types';

const ItemExperience = ({ experience, index, length }: TExperience) => {
	const { workPeriod, position, company, url, location, achievements } = experience;

	const orderNumber = `${index.toString().padStart(2, '0')} / ${(length - 1)
		.toString()
		.padStart(2, '0')}`;

	const { name } = company;

	return (
		<section className={Styles.item__wrapper} data-item={index}>
			<div className={Styles.item__header}>
				<h2 className={Styles.header__num}>{orderNumber}</h2>
				<h2 className={Styles.header__name}>{workPeriod}</h2>
			</div>
			<div className={Styles.item__content}>
				<div className={Styles.content__info__wrapper}>
					<div className={Styles.info__item}>
						position{' =>'} {position}
					</div>
					<div className={Styles.info__item}>
						company{' =>'} {name}
					</div>
					<div className={Styles.info__item}>
						<a className={Styles.link} href={url} target='_blank'>
							url{' =>'} {url}
						</a>
					</div>
					<div className={Styles.info__item}>
						location{' =>'} {location}
					</div>
				</div>
				<ul className={Styles.achievements}>
					{achievements.map((achievement, index) => (
						<li key={index} className={Styles.achievement}>
							{achievement}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ItemExperience;

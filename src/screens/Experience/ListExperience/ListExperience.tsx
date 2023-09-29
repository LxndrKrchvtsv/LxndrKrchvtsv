import React, { useCallback, useLayoutEffect, useRef } from 'react';
import Styles from './ListExperience.module.css';
import experiences from '../../../assets/Content/experiences.json';
import ItemExperience from '../ItemExperience/ItemExperience';
import { listExperienceCtx } from '../../../utils/helpers';

const ListExperience = () => {
	const listExperienceRef = useRef<HTMLDivElement>(null);

	const memoizeCtx = useCallback(() => {
		return listExperienceCtx(listExperienceRef);
	}, []);

	useLayoutEffect(() => {
		const ctx = memoizeCtx();

		return () => ctx.revert();
	}, []);

	return (
		<div ref={listExperienceRef} className={Styles.list__wrapper}>
			{experiences.map((experience, index) => (
				<ItemExperience
					key={index}
					experience={experience}
					index={index}
					length={experiences.length}
				/>
			))}
			<span className={Styles.border__bottom}></span>
		</div>
	);
};

export default ListExperience;

import React from 'react';
import { TPageTransition } from '../../../utils/types';

const PageTransition = ({ children }: TPageTransition) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};

export default PageTransition;

import React from 'react';
import Styles from './GalleryItem.module.css';
import { TGalleryItem } from '../../../utils/types';

const GalleryItem = ({ link, alt }: TGalleryItem) => {
	return (
		<div className={Styles.item}>
			<img className={Styles.img} src={link} alt={alt} />
		</div>
	);
};

export default GalleryItem;

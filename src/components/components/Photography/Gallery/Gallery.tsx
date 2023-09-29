import React, { useLayoutEffect, useRef } from 'react';
import Styles from './Gallery.module.css';
import { IMAGES_MAP } from '../../../../utils/constants';
import GalleryItem from '../../../atomicComponents/GalleryItem/GalleryItem';

interface IHoveredElement extends HTMLElement {
	isHovered?: boolean;
}

const Gallery = () => {
	const galleryRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const galleryWrapper = galleryRef?.current;
		const gallery = galleryWrapper?.querySelector<HTMLDivElement>(`.${Styles.gallery}`);
		const galleryItems = Array.from(gallery?.children as HTMLCollectionOf<IHoveredElement>);
		const indicator = galleryWrapper?.querySelector<HTMLDivElement>(`.${Styles.indicator}`);

		const defaultItemFlex = '0 1 20px';
		const hoverItemFlex = '1 1 400px';

		const updateGalleryItems = () => {
			if (galleryItems) {
				galleryItems.forEach((item) => {
					let flex = defaultItemFlex;

					if (item.isHovered) {
						flex = hoverItemFlex;
					}

					item.style.flex = flex;
				});
			}
		};

		galleryItems[0].isHovered = true;

		updateGalleryItems();

		galleryItems.forEach((item) => {
			item.addEventListener('mouseenter', () => {
				galleryItems.forEach((anotherItem) => {
					anotherItem.isHovered = anotherItem === item;
				});
				updateGalleryItems();
			});
		});

		galleryWrapper?.addEventListener('mousemove', (e) => {
			if (indicator?.style.left) {
				indicator.style.left = `${
					e.clientX - galleryWrapper?.getBoundingClientRect().left
				}`;
			}
		});
	}, []);

	return (
		<div ref={galleryRef} className={Styles.wrapper}>
			<div className={Styles.content}>
				<div className={Styles.indicator}></div>
				<div className={Styles.gallery}>
					{IMAGES_MAP.map(({ link, alt }) => (
						<GalleryItem key={alt} link={link} alt={alt} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;

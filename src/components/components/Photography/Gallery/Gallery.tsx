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

		const defaultItemFlex = '0 1 80px';
		const hoverItemFlex = '1 1 80vw';
		const defaultGrayScale = 'grayscale(1)';
		const hoverGrayScale = 'grayscale(0)';

		const updateGalleryItems = () => {
			if (galleryItems) {
				galleryItems.forEach((item) => {
					let flex = defaultItemFlex;
					let gray = defaultGrayScale;

					if (item.isHovered) {
						flex = hoverItemFlex;
						gray = hoverGrayScale;
					}

					item.style.flex = flex;
					item.style.filter = gray;
				});
			}
		};

		galleryItems[0].isHovered = true;

		updateGalleryItems();

		const mouseEnterHandler = (item: HTMLElement) => () => {
			galleryItems.forEach((anotherItem) => {
				anotherItem.isHovered = anotherItem === item;
			});
			updateGalleryItems();
		};

		const mouseMoveEventHandler = (e: MouseEvent) => {
			if (indicator?.style) {
				indicator.style.top = `${
					galleryWrapper && e.clientY - galleryWrapper.getBoundingClientRect().top
				}px`;
			}
		};

		galleryItems.forEach((item) => {
			item.addEventListener('mouseenter', mouseEnterHandler(item));
		});

		galleryWrapper?.addEventListener('mousemove', mouseMoveEventHandler);

		return () => {
			galleryItems.forEach((item) => {
				item.removeEventListener('mouseenter', mouseEnterHandler(item));
			});

			galleryWrapper?.removeEventListener('mousemove', mouseMoveEventHandler);
		};
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

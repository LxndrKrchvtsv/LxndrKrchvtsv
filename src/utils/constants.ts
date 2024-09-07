import { ELinkType } from './enums';

export const FIRST_VISIT = 'firstVisit';
export const LOCAL_TRANSITION = 'localTransition';

export const LINKS = [
	{ name: 'HOME', value: '' },
	{ name: 'ABOUT', value: 'About' },
	{ name: 'EXPERIENCE', value: 'Experience' },
	{ name: 'HOBBIES', value: 'Hobbies' },
	{ name: 'CONTACT', value: 'Contact' },
];

export const MY_NAME = `Cheers, I am Aleksandr`;

export const MY_OCCUPATION = `I am a frontend developer`;

export const CONTACT_DATA = [
	['akrichevcov19@gmail.com', 'akrichevcov19@gmail.com', ELinkType.EMAIL],
	['+370 644 950 32', '+370 644 950 32', ELinkType.PHONE],
	['TG => @LxndrKrchvtsv', 'https://t.me/LxndrKrchvtsv'],
	['LinkedIn', 'https://www.linkedin.com/in/aleksandr-krichevtsov'],
	['GitHub', 'https://github.com/LxndrKrchvtsv'],
	['SoundCloud', 'https://soundcloud.com/lxndrkrchvtsv/tracks'],
];

export const IMAGES_MAP = [
	{ link: '/images/galleryItems/cars.jpg', alt: 'cars' },
	{ link: '/images/galleryItems/pic.jpg', alt: 'pic' },
	{ link: '/images/galleryItems/cafedral.jpg', alt: 'cafedral' },
	{ link: '/images/galleryItems/dresden.jpg', alt: 'dresden' },
	{ link: '/images/galleryItems/down_town.jpg', alt: 'down_town' },
	{ link: '/images/galleryItems/grey_road.jpg', alt: 'grey_road' },
	{ link: '/images/galleryItems/ice.jpg', alt: 'ice' },
	{ link: '/images/galleryItems/snow.jpg', alt: 'snow' },
	{ link: '/images/galleryItems/snow_river.jpg', alt: 'snow_river' },
	{ link: '/images/galleryItems/autumn.jpg', alt: 'autumn' },
	{ link: '/images/galleryItems/work.jpg', alt: 'work' },
	{ link: '/images/galleryItems/tree.jpg', alt: 'tree' },
	{ link: '/images/galleryItems/porsche.jpg', alt: 'porsche' },
	{ link: '/images/galleryItems/road.jpg', alt: 'road' },
	{ link: '/images/galleryItems/sun.jpg', alt: 'sun' },
	{ link: '/images/galleryItems/sunrise.jpg', alt: 'sunrise' },
];

export const ARROW_RIGHT = '=>'

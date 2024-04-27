import { ELinkType } from './enums';
import { ReactNode } from 'react';

export type THeader = {
	children: ReactNode[] | ReactNode;
};

export type TMain = {
	children: ReactNode[] | ReactNode;
};

export type TPageTransition = {
	children: ReactNode[] | ReactNode;
};

export interface NavLinkProps {
	handleNavItemClick?: () => void;
	link: TLinks;
	key: string;
}

type TLinks = {
	name: string;
	value: string;
};

type TCompany = {
	name: string;
	project?: string;
	description?: string;
};

type TItemExperience = {
	position: string;
	company: TCompany;
	url: string;
	workPeriod: string;
	location: string;
	achievements: string[];
};

export type TExperience = {
	experience: TItemExperience;
	index: number;
	length: number;
};

export type TLink = {
	link: string;
	name?: string;
	typeLink?: ELinkType | string;
};

export type TGalleryItem = {
	link: string;
	alt: string;
};

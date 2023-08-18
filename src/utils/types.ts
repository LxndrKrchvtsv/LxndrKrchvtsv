import { ELinks } from './enums';
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

export type TLinks = {
	name: ELinks;
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

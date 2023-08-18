import React from 'react';
import './Header.module.css';
import { THeader } from '../../utils/types';

const Header = ({ children }: THeader) => {
	return <header>{children}</header>;
};

export default Header;

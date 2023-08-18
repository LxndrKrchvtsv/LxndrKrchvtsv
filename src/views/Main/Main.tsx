import React from 'react';
import Styles from './Main.module.css';
import { TMain } from '../../utils/types';

const Main = ({ children }: TMain) => {
	return <main className={Styles.main}>{children}</main>;
};

export default Main;

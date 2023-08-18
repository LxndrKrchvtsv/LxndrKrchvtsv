import React, { useLayoutEffect, useRef } from 'react';
import Header from './views/Header/Header';
import Greeting from './screens/Greeting/Greeting';
import Navigation from './components/components/Navigation/Navigation';
import Styles from './App.module.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './views/Main/Main';
import ListExperience from './screens/Experience/ListExperience/ListExperience';
import BackNavigation from './components/components/BackNavigation/BackNavigation';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/components/PageTransition/PageTransition';

const App = () => {
	const location = useLocation();

	const cursorRef = useRef<HTMLHeadingElement>(null);

	const editCursor = (e: MouseEvent) => {
		const { clientX: x, clientY: y } = e;
		if (cursorRef.current) {
			cursorRef.current.style.left = x + 'px';
			cursorRef.current.style.top = y + 'px';
		}
	};

	useLayoutEffect(() => {
		window.addEventListener('mousemove', editCursor);

		return () => {
			window.removeEventListener('mousemove', editCursor);
		};
	}, []);

	return (
		<div className={Styles.app}>
			<AnimatePresence mode={'wait'}>
				<Routes location={location} key={location.pathname}>
					<Route
						index
						path='/'
						element={
							<PageTransition>
								<Header>
									<Greeting />
									<Navigation />
								</Header>
							</PageTransition>
						}
					/>
					<Route
						path='/experience'
						element={
							<PageTransition>
								<Main>
									<ListExperience />
									<BackNavigation />
								</Main>
							</PageTransition>
						}
					/>
				</Routes>
			</AnimatePresence>
			<div ref={cursorRef} className={Styles.cursor}></div>
		</div>
	);
};

export default App;

import React from 'react';
import Header from './views/Header/Header';
import Greeting from './screens/Greeting/Greeting';
import Navigation from './components/components/Navigation/Navigation';
import Styles from './App.module.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './views/Main/Main';
import ListExperience from './screens/Experience/ListExperience/ListExperience';
import BackNavigation from './components/components/BackNavigation/BackNavigation';
import { AnimatePresence } from 'framer-motion';
// import PageTransition from './components/components/PageTransition/PageTransition';
import Contact from './screens/Contact/Contact';
import About from './screens/About/About';
import Hobbies from './screens/Hobbies/Hobbies';

const App = () => {
	const location = useLocation();

	return (
		<div className={Styles.app}>
			<AnimatePresence mode={'wait'}>
				<Routes location={location} key={location.pathname}>
					<Route
						index
						path='/'
						element={
							// <PageTransition>
							<Header>
								<Greeting />
								<Navigation />
							</Header>
							// </PageTransition>
						}
					/>
					<Route
						path='/experience'
						element={
							// <PageTransition>
							<Main>
								<ListExperience />
								<BackNavigation />
							</Main>
							// </PageTransition>
						}
					/>
					<Route
						path='/about'
						element={
							// <PageTransition>
							<Main>
								<About />
								<BackNavigation />
							</Main>
							// </PageTransition>
						}
					/>
					<Route
						path='/hobbies'
						element={
							// <PageTransition>
							<Main>
								<Hobbies />
								<BackNavigation />
							</Main>
							// </PageTransition>
						}
					/>
					<Route
						path='/contact'
						element={
							// <PageTransition>
							<Main>
								<Contact />
								<BackNavigation />
							</Main>
							// </PageTransition>
						}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default App;

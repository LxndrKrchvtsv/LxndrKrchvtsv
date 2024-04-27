import React, { useEffect } from 'react';
import Header from './views/Header/Header';
import Greeting from './screens/Greeting/Greeting';
import Styles from './App.module.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './views/Main/Main';
import ListExperience from './screens/Experience/ListExperience/ListExperience';
import Contact from './screens/Contact/Contact';
import About from './screens/About/About';
import Hobbies from './screens/Hobbies/Hobbies';
import ClientInfo from './components/components/ClientInfo/ClientInfo';
import Navigation from './components/components/Navigation/Navigation';
import SiteLoader from './components/components/SiteLoader/SiteLoader';
import { FIRST_VISIT } from './utils/constants';
import { Paths } from './utils/enums';
import CurrentPage from './components/atomicComponents/CurrentPage/CurrentPage';

const App = () => {
	const location = useLocation();

	useEffect(() => {
		sessionStorage.setItem(FIRST_VISIT, 'true');
	}, []);

	return (
		<div className={Styles.app}>
			<SiteLoader>
				<Navigation />
				<Routes location={location} key={location.pathname}>
					<Route
						index
						path={Paths.HOME}
						element={
							<Header>
								<Greeting />
								<ClientInfo />
							</Header>
						}
					/>
					<Route
						path={Paths.EXPERIENCE}
						element={
							<Main>
								<CurrentPage />
								<ListExperience />
							</Main>
						}
					/>
					<Route
						path={Paths.ABOUT}
						element={
							<Main>
								<CurrentPage />
								<About />
							</Main>
						}
					/>
					<Route
						path={Paths.HOBBIES}
						element={
							<Main>
								<CurrentPage />
								<Hobbies />
							</Main>
						}
					/>
					<Route
						path={Paths.CONTACT}
						element={
							<Main>
								<CurrentPage />
								<Contact />
							</Main>
						}
					/>
				</Routes>
			</SiteLoader>
		</div>
	);
};

export default App;

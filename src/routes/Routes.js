// Routes with transition effect

import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import Copyright from '../components/Copyright/Copyright';

// Pages
import Dashboard from '../pages/home/Home';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import Humidity from '../components/Humidity/Humidity';
import Temperature from '../components/Temperature/Temperature';

// Styles
import useStyles from './style.js';

// Routes => Compoonents
const routes = [
	{ name: 'Dashboard', path: '/', Component: Dashboard },
	{ name: 'Login', path: '/login', Component: Login },
	{ name: 'Signup', path: '/signup', Component: Signup },
	{ name: 'Humidity', path: '/humidity', Component: Humidity },
	{ name: 'Temperature', path: '/temperature', Component: Temperature }
];

// const Routes = ({ authenticated }) => {
const Routes = () => {
	const classes = useStyles();

	// If user is authenticated,
	// change login and signup route to home page
	// const serRedirect = name => {
	// 	if (authenticated && (name == 'Login' || 'Signup')) return true;
	// 	return false;
	// };

	// create routes from array
	return routes.map(({ path, name, Component }) => (
		<Route key={path} exact path={path}>
			{({ match }) => (
				<CSSTransition
					in={match != null}
					timeout={300}
					unmountOnExit
					classNames={{
						enter: classes.pageEnter,
						enterActive: classes.pageEnterActive,
						exit: classes.pageExit,
						exitActive: classes.pageExitActive
					}}
				>
					<div className={classes.page}>
						{/* {(serRedirect(name) && <Redirect to='/' />) || <Component />} */}
						<Component />
						<Copyright />
					</div>
				</CSSTransition>
			)}
		</Route>
	));
};

export default Routes;

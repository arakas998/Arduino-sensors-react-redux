// Routes with transition effect

import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import Copyright from '../components/Copyright/Copyright';

// Pages
import Dashboard from '../pages/home/Home';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import Logout from '../pages/auth/Logout';
import Humidity from '../components/Humidity/Humidity';
import Temperature from '../components/Temperature/Temperature';

// Styles
import useStyles from './style.js';

const routes = [
	{ path: '/', name: 'Dashboard', Component: Dashboard },
	{ path: '/login', name: 'Login', Component: Login },
	{ path: '/logout', name: 'Logout', Component: Logout },
	{ path: '/signup', name: 'Signup', Component: Signup },
	{ path: '/humidity', name: 'Humidity', Component: Humidity },
	{ path: '/temperature', name: 'Temperature', Component: Temperature }
];

const Routes = () => {
	const classes = useStyles();
	return routes.map(({ path, Component }) => (
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
						<Component />
						<Copyright />
					</div>
				</CSSTransition>
			)}
		</Route>
	));
};

export default Routes;

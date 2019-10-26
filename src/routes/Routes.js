// Routes

import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Copyright from '../components/Copyright/Copyright';
import Dashboard from '../pages/home/Home';
import Temperature from '../components/Temperature/Temperature';
import Humidity from '../components/Humidity/Humidity';
import Signup from '../pages/auth/SignUp';
import Signin from '../pages/auth/SignIn';
import Signout from '../pages/auth/SignOut';

// Custom styles
import useStyles from './style.js';

const routes = [
	{ path: '/', name: 'Dashboard', Component: Dashboard },
	{ path: '/temperature', name: 'Temperature', Component: Temperature },
	{ path: '/humidity', name: 'Humidity', Component: Humidity },
	{ path: '/signin', name: 'Login', Component: Signin },
	{ path: '/signup', name: 'Signup', Component: Signup },
	{ path: '/signout', name: 'Logout', Component: Signout }
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

// Main application

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// Material-UI
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

// Custom components
import Routes from '../routes/Routes';
import Navigation from '../layout/navigation/Navigation';

// Custom styles
import useStyles from './style.js';

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<BrowserRouter>
				<Navigation />
				<Container component='main' className={`${classes.pageContainer} ${classes.marginLeft}`}>
					<Toolbar />
					<Switch>
						<Routes />
					</Switch>
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;

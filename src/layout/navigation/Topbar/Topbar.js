// Layout - application bar

import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../../redux/actions/userActions';

// Material UI
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Custom styles
import useStyles from './style.js';

const Topbar = ({ open, handleDrawerOpen }) => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const logoutHandler = e => {
		dispatch(logoutAction());
		history.push('/login');
	};

	return (
		<AppBar
			position='fixed'
			component='div'
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open
			})}
		>
			<Toolbar>
				{/* Hamburger */}
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					edge='start'
					className={clsx(classes.menuButton, {
						[classes.hide]: open
					})}
				>
					<FontAwesomeIcon icon={faBars} />
				</IconButton>

				<Container>
					<Grid container justify='space-between'>
						{/* Application name*/}
						<Grid item>
							<Typography variant='h5' style={{ marginTop: 4 }} noWrap>
								<Link
									to='/'
									component={RouterLink}
									underline='none'
									color='inherit'
									variant='inherit'
								>
									Arduino Sensors
								</Link>
							</Typography>
						</Grid>

						{/* Links */}
						<Grid item>
							{(!user.authenticated && (
								<Button component={RouterLink} to={'/login'}>
									Log In
								</Button>
							)) || (
								<>
									<Button
										//component={RouterLink}
										//to={'/login'}
										onClick={logoutHandler}
									>
										Log Out
									</Button>
									<Fab size='small' className={classes.avatar}>
										<Link
											to='/'
											component={RouterLink}
											underline='none'
											color='inherit'
											variant='inherit'
										>
											{user.details.firstName[0] + user.details.lastName[0]}
										</Link>
									</Fab>
								</>
							)}
						</Grid>
					</Grid>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;

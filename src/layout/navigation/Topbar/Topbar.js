// Layout - application bar

import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutAction } from '../../../redux/actions/authActions';

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
	const dispatch = useDispatch();
	const classes = useStyles();
	const singIn = useSelector(state => state.auth.singIn);

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
						{/* Logo */}
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
							{(!singIn && (
								<Button component={RouterLink} to={'/signin'}>
									Sign In
								</Button>
							)) || (
								<>
									<Button
										component={RouterLink}
										to={'/singin'}
										onClick={() => dispatch(signOutAction())}
									>
										Sign Out
									</Button>
									<Fab size='small' className={classes.avatar}>
										<Link
											to='/'
											component={RouterLink}
											underline='none'
											color='inherit'
											variant='inherit'
										>
											NN
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

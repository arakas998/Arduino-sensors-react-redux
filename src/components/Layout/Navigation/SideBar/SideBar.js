// Layout - mini drawer

import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// Material UI
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Font awesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faThermometerHalf,
	faTint,
	faSlidersH
} from '@fortawesome/free-solid-svg-icons';

// Custom styles
import useStyles from './style.js';

const routes = [
	{ path: '/temperature', name: 'Temperature', icon: faThermometerHalf },
	{ path: '/humidity', name: 'Humidity', icon: faTint },
	{ path: '/control', name: 'Control', icon: faSlidersH }
];

export default function MiniDrawer({ open, handleDrawerClose }) {
	const classes = useStyles();

	return (
		<Drawer
			variant='permanent'
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})
			}}
			open={open}
		>
			{/* Menu close button */}
			<div className={classes.toolbar}>
				<IconButton onClick={handleDrawerClose}>
					<FontAwesomeIcon icon={faChevronLeft} pull='right' />
				</IconButton>
			</div>
			<Divider />

			{/* Button links */}
			<List>
				{routes.map(({ path, name, icon }) => (
					<ListItem button component={Link} to={path} key={path}>
						<ListItemIcon>
							<FontAwesomeIcon icon={icon} size='lg' pull='right' />
						</ListItemIcon>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
			<Divider />

			<List>
				{['XY', 'XY'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}

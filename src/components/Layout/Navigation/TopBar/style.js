// AppsBar - custom style

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles(theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		}),
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		[theme.breakpoints.up('sm')]: {
			marginRight: 36
		}
	},
	hide: {
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	title: {
		flexGrow: 1
	},
	avatar: {
		margin: theme.spacing(0, 1),
		color: theme.palette.secondary.contrastText,
		background: theme.palette.secondary.main,
		'&:hover': {
			background: theme.palette.secondary.dark
		},
		fontSize: 'inherit',
		display: 'inline-flex',
		boxShadow: 'none',
		'&:active': {
			boxShadow: 'none'
		}
	}
}));

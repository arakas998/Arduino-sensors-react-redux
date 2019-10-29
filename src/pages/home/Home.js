// Home page

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material UI
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	// header: {
	// 	padding: theme.spacing(1, 2)
	// },
	paper: {
		padding: theme.spacing(3, 2)
	}
}));

const Home = () => {
	const classes = useStyles();
	const history = useHistory();
	const authenticated = useSelector(state => state.user.authenticated);

	useEffect(() => {
		if (!authenticated) history.push('/login');
	}, [authenticated]);

	return (
		<Grid container spacing={3} justify={'center'}>
			{/* header */}
			<Grid item xs={12}>
				{/* <div className={classes.header}> */}
				<Typography variant='h5' component='h3'>
					Home page
				</Typography>
				{/* </div> */}
			</Grid>

			{/* left */}
			<Grid item xs={12} sm={7}>
				<Paper className={classes.paper}>
					<Typography variant='h5' component='h3'>
						This is a sheet of paper.
					</Typography>
					<Typography component='p'>
						Paper can be used to build surface or other elements for your application.
					</Typography>
				</Paper>
			</Grid>

			{/* right */}
			<Grid item xs={12} sm={5}>
				<Grid container spacing={3} direction='column'>
					{/* right first */}
					<Grid item>
						<Paper className={classes.paper}>
							<Typography variant='h5' component='h3'>
								This is a sheet of paper.
							</Typography>
							<Typography component='p'>
								Paper can be used to build surface or other elements for your application.
							</Typography>
						</Paper>
					</Grid>

					{/* right second */}
					<Grid item>
						<Paper className={classes.paper}>
							<Typography variant='h5' component='h3'>
								This is a sheet of paper.
							</Typography>
							<Typography component='p'>
								Paper can be used to build surface or other elements for your application.
							</Typography>
						</Paper>
					</Grid>

					{/* right third */}
					<Grid item>
						<Paper className={classes.paper}>
							<Typography variant='h5' component='h3'>
								This is a sheet of paper.
							</Typography>
							<Typography component='p'>
								Paper can be used to build surface or other elements for your application.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;

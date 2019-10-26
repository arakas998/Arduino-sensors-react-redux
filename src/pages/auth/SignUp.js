// Sign up page

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import signUpAction from '../../redux/actions/signUpAction';

// Material UI
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

// Font awesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

// Custom styles
import useStyles from './style.js';

const SignUp = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	const handleChange = (id, value) => {
		setUser(state => ({ ...state, [id]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('TCL: SignUp -> user', user);

		dispatch(signUpAction(user));
		setUser({
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		});
	};

	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<FontAwesomeIcon icon={faUserLock} />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								value={user.firstName}
								onChange={e => handleChange(e.target.id, e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
								value={user.lastName}
								onChange={e => handleChange(e.target.id, e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={user.email}
								onChange={e => handleChange(e.target.id, e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={user.password}
								onChange={e => handleChange(e.target.id, e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Sign up
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link component={RouterLink} to='/signin' variant='body2'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default SignUp;

// SignIn form

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../store/actions/authActions';

// Material UI
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';

// Font awesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

// Custom styles
import useStyles from './style.js';

const SignIn = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [state, setState] = useState({
		email: '',
		password: '',
		remember: false
	});

	const handleSubmit = e => {
		e.preventDefault();
		setState({
			email: '',
			password: '',
			remember: false
		});
		dispatch(signInAction(state));
	};

	const handleChange = (id, value) => {
		setState(state => ({ ...state, [id]: value }));
	};

	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<FontAwesomeIcon icon={faUserLock} />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						onChange={e => handleChange(e.target.id, e.target.value)}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						value={state.password}
						onChange={e => handleChange(e.target.id, e.target.value)}
					/>
					<FormControlLabel
						control={
							<Checkbox
								id='remember'
								name='remember'
								value='remember'
								color='primary'
								checked={state.remember}
								onChange={e => handleChange(e.target.id, e.target.checked)}
							/>
						}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link component={RouterLink} to='/signup' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default SignIn;

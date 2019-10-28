// Login page

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/actions/userActions';
import ButtonProgress from '../../components/ButtonProgress';

// Material UI
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
// import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

// Custom styles
import useStyles from './style.js';

const Login = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const loading = useSelector(state => state.ui.loading);
	const errors = useSelector(state => state.ui.errors);
	const [state, setState] = useState({
		email: '',
		password: ''
		// remember: false
	});

	const handleChange = (id, value) => {
		setState(state => ({ ...state, [id]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();

		// Dispatch login action
		dispatch(loginAction(state, history));
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
					{/* email */}
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
						error={errors.email ? true : false}
						helperText={errors.email}
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
						error={errors.password ? true : false}
						helperText={errors.password}
					/>

					{/* <FormControlLabel
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
					/> */}

					{/* error message */}
					<Typography variant='h6' align='center' color='secondary'>
						{errors.error}
					</Typography>

					{/* Submit button with progress */}
					<ButtonProgress loading={loading}>Log In</ButtonProgress>

					<Grid container>
						{/* <Grid item xs>
							<Link href='#' variant='body2'>
								Forgot password?
							</Link>
						</Grid> */}
						<Grid item style={{ marginLeft: 'auto' }}>
							<Link component={RouterLink} to='/signup' variant='body2'>
								Don't have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default Login;

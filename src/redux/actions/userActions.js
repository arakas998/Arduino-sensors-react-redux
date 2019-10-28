// User actions

import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING, LOGOUT_USER } from '../types';
import postData from '../../lib/postData';

// Login
export const loginAction = (loginData, history) => dispatch => {
	// Set loading
	dispatch({ type: LOADING });

	// Login to firebase
	postData('/login', null, loginData, (err, data) => {
		// If error set erros messages
		if (err) {
			console.log('TCL: loginAction -> postData -> err', err);
			dispatch({ type: SET_ERRORS, payload: err });
			return;
		}

		// Save token in browser local storage
		localStorage.setItem('token', 'Bearer ' + data.token);

		// Set user details
		dispatch({ type: 'SET_USER', payload: data.user });

		// Clear all errors
		dispatch({ type: CLEAR_ERRORS });

		// Redirect to home page
		history.push('/');
	});
};

// Logout
export const logoutAction = () => dispatch => {
	dispatch({ type: LOGOUT_USER });
};

export const signupAction = (loginData, history) => dispatch => {
	console.log('TCL: loginData', loginData);
};

export const getUserData = () => dispatch => {};

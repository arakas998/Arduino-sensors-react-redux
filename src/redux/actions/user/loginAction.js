// Login action

import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING } from '../../types';
import fetchData from '../../../lib/fetchData';

const loginAction = (loginData, history) => dispatch => {
	// Set loading
	dispatch({ type: LOADING });

	// Login to firebase
	fetchData('/login', 'POST', null, loginData, (err, data) => {
		// If error set erros messages
		if (err) {
			console.log('TCL: loginAction -> postData -> err', err);
			dispatch({ type: SET_ERRORS, payload: err });
			return;
		}

		// Save token in browser local storage
		localStorage.setItem('token', data.tokenId);

		// Set user details
		dispatch({ type: SET_USER, payload: data.user });

		// Clear all errors
		dispatch({ type: CLEAR_ERRORS });

		// Redirect to home page
		history.push('/');
	});
};

export default loginAction;

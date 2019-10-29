// Signup action

import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING } from '../../types';
import fetchData from '../../../lib/fetchData';

const signupAction = (signupData, history) => dispatch => {
	console.log('TCL: loginData', signupData);

	// Set loading
	dispatch({ type: LOADING });

	// Login to firebase
	fetchData('/signup', 'POST', null, signupData, (err, data) => {
		// If error set erros messages
		if (err) {
			console.log('TCL: signupAction -> postData -> err', err);
			dispatch({
				type: SET_ERRORS,
				payload: err
			});
			return;
		}

		// Save token in browser local storage
		localStorage.setItem('token', data.tokenId);

		// Set user details
		dispatch({
			type: SET_USER,
			payload: data.user
		});

		// Clear all errors
		dispatch({
			type: CLEAR_ERRORS
		});

		// Redirect to home page
		history.push('/');
	});
};

export default signupAction;

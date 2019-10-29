// Get user details by id action

import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING } from '../../types';
import fetchData from '../../../lib/fetchData';

const getUserDetailsAction = (userId, token) => dispatch => {
	// Set loading
	dispatch({ type: LOADING });

	// Login to firebase
	fetchData(
    `/user/${userId}`, 'GET', token, null, (err, data) => {
		// If error set erros messages
		if (err) {
			console.log('TCL: getUserDetailsAction -> postData -> err', err);
			dispatch({ type: SET_ERRORS, payload: err });
			return;
		}

		// Set user details
		dispatch({ type: SET_USER, payload: data.user });

		// Clear all errors
		dispatch({ type: CLEAR_ERRORS });
	});
};

export default getUserDetailsAction;

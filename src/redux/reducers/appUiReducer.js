// Applivcation UI reducer

import { LOADING, STOP_LOADING, SET_ERRORS, CLEAR_ERRORS } from '../types';

// initial state of application UI
const initialState = {
	loading: false,
	errors: {}
};

const appUiReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true
			};

		case STOP_LOADING:
			return {
				...state,
				loading: false
			};

		case SET_ERRORS:
			return {
				loading: false,
				errors: action.payload
			};

		case CLEAR_ERRORS:
			return initialState;

		default:
			return state;
	}
};

export default appUiReducer;

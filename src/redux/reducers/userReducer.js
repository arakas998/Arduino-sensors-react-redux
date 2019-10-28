// User reducer

import { SET_USER, LOGIN_USER, LOGOUT_USER } from '../types';

// User default store state
const initialState = {
	authenticated: false,
	details: {}
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				authenticated: true
			};

		case LOGOUT_USER:
			return initialState;

		case SET_USER:
			return {
				authenticated: true,
				details: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;

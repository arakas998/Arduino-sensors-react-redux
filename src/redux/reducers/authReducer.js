// Store reducer

const initState = {
	user: {}
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SIGNUP_USER':
			return {
				...state,
				user: action.payload
			};

    case 'SIGNIN_USER':
			return {
				...state,
				login: true
			};

    case 'SIGNOUT_USER':
			return {
				...state,
				login: false,
				email: '',
				password: '',
				remember: false
			};

		default:
			return state;
	}
};

export default authReducer;

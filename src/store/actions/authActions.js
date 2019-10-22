// Authentication actions

// Sign in
export const signUpAction = () => {
  return (dispatch, getState) => {
    // TODO: Fetch database

    dispatch({ type: 'SIGNUP_USER' });
  };
};

// Login
export const signInAction = loginData => {
	console.log('TCL: loginData', loginData);

	return (dispatch, getState) => {
		// TODO: Fetch database

    dispatch({ type: 'SIGNIN_USER', data: loginData });
	};
};

// Logout
export const signOutAction = () => {
	return (dispatch, getState) => {
		// TODO: Fetch database

    dispatch({ type: 'SIGNOUT_USER' });
	};
};

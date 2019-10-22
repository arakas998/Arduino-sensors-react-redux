// Sign in action

import firebase from '../../firebase/firebase';

const signUpAction = user => {
	return async dispatch => {
		const res = await firebase.signup(user);
		console.log('TCL: signUpAction -> res', res);

		res && dispatch({ type: 'SIGNUP_USER', payload: res });
	};
};

export default signUpAction;

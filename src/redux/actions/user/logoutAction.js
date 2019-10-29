// Logout action

import { LOGOUT_USER } from '../../types';

const logoutAction = () => dispatch => {
	dispatch({ type: LOGOUT_USER });
};

export default logoutAction;

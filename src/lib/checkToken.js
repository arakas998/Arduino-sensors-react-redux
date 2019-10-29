// Check saved token

import jwtDecode from 'jwt-decode';

const checkToken = () => {
	// Get saved token
	const token = localStorage.token;
	if (token) {
		try {
			// Decode token
			const decoded = jwtDecode(token);
			console.log('TCL: checkToken -> decoded', decoded);
			const exp = decoded.exp * 1000;
			// If valid
			if (exp > Date.now()) return decoded.user_id;
		} catch {
			return false;
		}
	}
	return false;
};

export default checkToken;

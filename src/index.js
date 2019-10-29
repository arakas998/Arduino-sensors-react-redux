// Application entry file

import React from 'react';
import ReactDOM from 'react-dom';

// Redux
// import { SET_AUTHENTICATED } from './redux/types';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getUserDetailsAction } from './redux/actions/userActions';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import App from './app/App';
import Theme from './theme/Theme';

// Utility
import { checkToken, fetchData } from './lib';

// Check for valid tocken on local storage
const userId = checkToken();
if (userId) {
	// store.dispatch({ type: 'SET_AUTHENTICATED' });
	store.dispatch(getUserDetailsAction(userId, localStorage.token));
}

ReactDOM.render(
	<Provider store={store}>
		<Theme>
			<CssBaseline />
			<App />
		</Theme>
	</Provider>,
	document.getElementById('root')
);

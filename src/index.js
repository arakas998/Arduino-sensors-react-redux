// Entry file

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

// Redux store
import App from './app/App';
import store from './redux/store';

// Custom theme
import Theme from './theme/Theme';

ReactDOM.render(
	<Provider store={store}>
		<Theme>
			<CssBaseline />
			<App />
		</Theme>
	</Provider>,
	document.getElementById('root')
);

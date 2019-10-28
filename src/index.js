// Application entry file

import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import App from './app/App';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';

// Custom
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

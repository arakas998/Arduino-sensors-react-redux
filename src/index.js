// Entry file

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

// Redux store
import App from './app/App';
import store from './redux/store';

// Global theme
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);

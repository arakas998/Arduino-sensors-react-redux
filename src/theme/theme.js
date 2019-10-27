// Custom theme

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export default function Theme({ dark, children }) {
	const theme = createMuiTheme({
		// palette: {
		// 	primary: {
		// 		light: '#33c9dc',
		// 		main: '#00bcd4',
		// 		dark: '#008394',
		// 		contrastText: '#fff'
		// 	},
		// 	secondary: {
		// 		light: '#ff6333',
		// 		main: '#ff3d00',
		// 		dark: '#b22a00',
		// 		contrastText: '#fff'
		// 	}
		// },
		palette: {
			type: `${dark ? 'dark' : 'light'}`
		},
		overrides: {
			MuiButton: {
				text: {
					color: 'inherit'
				}
			}
		}
	});

	// theme.palette.type = `${false ? 'dark' : 'light'}`;
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

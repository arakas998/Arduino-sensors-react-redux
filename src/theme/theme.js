// Theme

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	// palette: {
	// 	primary: {
	// 		main: '#546e7a'
	// 	},
	// 	secondary: {
	// 		main: '#7c4dff'
	// 	}
	// }
	overrides: {
		MuiButton: {
			text: {
				color: 'inherit'
			}
		}
	}
});

export default theme;

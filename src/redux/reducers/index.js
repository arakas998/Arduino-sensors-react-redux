// Root reducer

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dataReducer from './dataReducer';
import appUiReducer from './appUiReducer';

// Combine all reducer in one root reducer
const rootReducer = combineReducers({
	user: userReducer,
	data: dataReducer,
	ui: appUiReducer
});

export default rootReducer;

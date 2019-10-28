// Redux store

import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'; // Async actions middleware
import rootReducer from './reducers'; // Root reducer

const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		// Needed for chrome extension dev tools
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;

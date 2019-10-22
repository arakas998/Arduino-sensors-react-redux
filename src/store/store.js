// Redux store

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Async actions middleware
import rootReducer from './reducers/rootReducer'; // Root reducer
import firebase from '../firebase/firebase';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

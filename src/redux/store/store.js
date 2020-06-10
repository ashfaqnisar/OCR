import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import middleware, { history } from './middleware';
import { sidebar, theme } from '../reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const reducers = {
  router: connectRouter(history),
  form,
  theme,
  sidebar,
  firebase: firebaseReducer,
  firestore: firestoreReducer
};

const store = createStore(combineReducers(reducers), {}, middleware);
export default store;

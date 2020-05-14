import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import middleware, { history, sagaMiddleware } from './middleware';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import {
  cryptoTable,
  rtl,
  sidebar,
  user,
  register,
  newOrderTable,
  todo,
  theme,
  invoices,
  invoiceDetail
} from '../reducers';

import appSagas from './app/appSagas';

const reducers = {
  router: connectRouter(history),
  form,
  theme,
  todo,
  newOrderTable,
  user,
  register,
  firebase,
  sidebar,
  rtl,
  cryptoTable,
  invoices,
  invoiceDetail
};

const store = createStore(combineReducers(reducers), {}, middleware);
sagaMiddleware.run(appSagas);
export default store;

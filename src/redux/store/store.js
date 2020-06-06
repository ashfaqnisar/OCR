import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import middleware, { history } from './middleware';
import { sidebar, user, register, theme } from '../reducers';

const reducers = {
  router: connectRouter(history),
  form,
  theme,
  user,
  register,
  sidebar
};

const store = createStore(combineReducers(reducers), {}, middleware);
export default store;

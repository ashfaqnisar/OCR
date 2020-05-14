import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const sagaMiddleware = createSagaMiddleware();

export const connectedRouterMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(
  connectedRouterMiddleware,
  thunk,
  sagaMiddleware
);

export default composeWithDevTools(middleware);

import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const sagaMiddleware = createSagaMiddleware();

export const connectedRouterMiddleware = routerMiddleware(history);

middlewares.push(sagaMiddleware, connectedRouterMiddleware, thunk);

const middleware = applyMiddleware(...middlewares);

export default composeWithDevTools(middleware);

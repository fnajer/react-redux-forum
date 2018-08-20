import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducer from './reducers';

export const routerHistory = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(routerHistory)(reducer),
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(routerHistory)),
  )
);

export default store;

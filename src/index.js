import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import App from './App';
import store from './store';
import { routerHistory } from './store'

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>
      <AppWithRouter />
    </ConnectedRouter>  
  </Provider>
, document.getElementById('root'));

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { GET_CHANNELS } from './actions/channels';

const reducer = (state, action) => {
  if (action.type === GET_CHANNELS) {
    return {
      channels: [
        {
          id: 1,
          name: 'tete',
        }
      ]
    };
  }
  return state;
}

const initialState = {
  channels: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

export default store;

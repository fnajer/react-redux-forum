import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'new_action') {
    return {
      channels: [action.channels]
    };
  }
  return state;
}

const initialState = {
  channels: [],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
  type: 'new_action',
  channels: {
    id: 1,
    name: 'tete',
  }
});
export default store;

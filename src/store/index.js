import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'new_action') {
    return [{
      text: 'hello',
      id: 1,
    }];
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
  type: 'new_action'
});
export default store;

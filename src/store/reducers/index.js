import { combineReducers } from 'redux';

import channelsReducer from './channels';
import threadsReducer from './threads';

const reducer = combineReducers({
  channels: channelsReducer,
  threads: threadsReducer
});

export default reducer;
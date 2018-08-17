import { combineReducers } from 'redux';

import channelsReducer from './channels';
import threadsReducer from './threads';
import threadReducer from './thread';

const reducer = combineReducers({
  channels: channelsReducer,
  threads: threadsReducer,
  thread: threadReducer,
});

export default reducer;
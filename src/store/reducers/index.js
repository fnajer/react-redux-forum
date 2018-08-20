import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import channelsReducer from './channels';
import threadsReducer from './threads';
import threadReducer from './thread';
import createThreadReducer from './create-thread';
import editThreadReducer from './edit-thread';

const reducer = combineReducers({
  auth: authReducer,
  channels: channelsReducer,
  threads: threadsReducer,
  thread: threadReducer,
  form: formReducer,
  createThread: createThreadReducer,
  editThread: editThreadReducer,
});

export default reducer;
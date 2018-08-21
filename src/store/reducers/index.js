import { combineReducers } from 'redux';
import routerReducer from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import notyReducer from './noty';
import authReducer from './auth';
import channelsReducer from './channels';
import threadsReducer from './threads';
import threadReducer from './thread';
import createThreadReducer from './create-thread';
import editThreadReducer from './edit-thread';
import createReplyReducer from './create-reply';

const reducer = combineReducers({
  noty: notyReducer,
  auth: authReducer,
  channels: channelsReducer,
  threads: threadsReducer,
  thread: threadReducer,
  form: formReducer,
  createThread: createThreadReducer,
  editThread: editThreadReducer,
  createReply: createReplyReducer,
  router: routerReducer,
});

export default reducer;
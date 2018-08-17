import { GET_THREAD, GET_THREAD_LOADING, GET_THREAD_LOADED } from '../actions/threads';
import { GET_REPLIES, GET_REPLIES_LOADED } from '../actions/replies';

const threadReducer = (state = { loading: true, loadingReplies: true }, action) => {
  switch (action.type) {
    case GET_THREAD:
      return {
        ...state,
        data: action.payload,
      }
    case GET_THREAD_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_THREAD_LOADED:
      return {
        ...state,
        loading: false,
      }
    case GET_REPLIES:
      return {
        ...state,
        replies: action.payload,
      }
    case GET_REPLIES_LOADED:
      return {
        ...state,
        loadingReplies: false,
      }
    default:
      return state;
  }
};

export default threadReducer;
import { GET_THREADS, GET_THREADS_LOADING, GET_THREADS_LOADED } from '../actions/threads';

const threadsReducer = (state = { threadsData: { data: [] } }, action) => {
  switch (action.type) {
    case GET_THREADS: 
      return {
        ...state,
        threadsData: action.payload,
      };
    case GET_THREADS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_THREADS_LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default threadsReducer;
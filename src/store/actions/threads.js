import axios from 'axios';

import config from '../../config';

export const GET_THREADS = 'GET_THREADS';
export const GET_THREADS_LOADING = 'GET_THREADS_LOADING';
export const GET_THREADS_LOADED = 'GET_THREADS_LOADED';

const getThreads = (page = 1) => async (dispatch, getState) => {
  dispatch({
    type: GET_THREADS_LOADING,
  });

  const responce = await axios.get(`${config.apiUrl}/threads?page=${page}`);

  dispatch({
    type: GET_THREADS,
    payload: responce.data.data,
  });

  dispatch({
    type: GET_THREADS_LOADED,
  });
}

export default getThreads;
import axios from 'axios';

import config from '../../config';

export const GET_THREADS = 'GET_THREADS';

const getThreads = (page = 1) => async (dispatch, getState) => {
  const responce = await axios.get(`${config.apiUrl}/threads?page=${page}`);

  dispatch({
    type: GET_THREADS,
    payload: responce.data.data,
  });
}

export default getThreads;
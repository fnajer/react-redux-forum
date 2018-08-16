import axios from 'axios';

import config from '../../config';

export const GET_THREADS = 'GET_THREADS';

const getThreads = () => async (dispatch, getState) => {
  const responce = await axios.get(`${config.apiUrl}/threads`);

  dispatch({
    type: GET_THREADS,
    payload: responce.data,
  });
}

export default getThreads;